import * as THREE from "three";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Lightformer,
  ContactShadows,
  GradientTexture,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { navigateToContent } from "../../utils/contentNavigation";
import styles from "./Encuesta.module.css";

extend({ MeshLineGeometry, MeshLineMaterial });

const MONUMENTO_URL = "/cardMonumento.glb";
const QR_URL = "/cardMonumentoQr.glb";

useGLTF.preload(MONUMENTO_URL);
useGLTF.preload(QR_URL);

// Ambos modelos comparten el mismo broche (clip), ubicado ~1.2 unidades por
// encima del centro de la tarjeta en su escala nativa. Con cardScale=1.6 el
// broche queda a ~1.92 unidades del centro: ese es el punto donde la junta
// esférica cuelga la tarjeta de la cinta.
const CLIP_OFFSET = 1.9;
const CARD_SCALE = 1.6;

export default function Encuesta() {
  const navigate = useNavigate();

  const irAFuentes = useCallback(() => {
    navigateToContent(navigate, { to: "/fuentes", direction: 1 });
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Semillero de Investigación</span>
        <h2 className={styles.title}>Credenciales digitales</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.stageFrame}>
          <div className={styles.stage}>
            <Canvas shadows camera={{ position: [0, 1.35, 5.75], fov: 36 }}>
              <ambientLight intensity={2} />
              <directionalLight
                position={[4, 8, 6]}
                intensity={1.6}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />

              {/* Fondo degradado en gris: da sensación de espacio 3D real
                  (una vitrina) en vez de un color plano detrás de las tarjetas. */}
              <mesh position={[0, 1, -8]} scale={[40, 24, 1]}>
                <planeGeometry />
                <meshBasicMaterial toneMapped={false}>
                  <GradientTexture stops={[0, 1]} colors={["#f6f6f4", "#d4d4d2"]} size={512} />
                </meshBasicMaterial>
              </mesh>

              <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                <Badge url={MONUMENTO_URL} anchorPosition={[-1, 4.6, 0]} />
                <Badge url={QR_URL} anchorPosition={[1, 3.9, 0]} />
              </Physics>

              <ContactShadows
                position={[0, -2.1, 0]}
                opacity={0.4}
                scale={12}
                blur={2.2}
                far={4}
              />

              <Environment>
                <Lightformer
                  intensity={2}
                  color="white"
                  position={[0, -1, 5]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={3}
                  color="white"
                  position={[-1, -1, 1]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={3}
                  color="white"
                  position={[1, 1, 1]}
                  rotation={[0, 0, Math.PI / 3]}
                  scale={[100, 0.1, 1]}
                />
                <Lightformer
                  intensity={10}
                  color="white"
                  position={[-10, 0, 14]}
                  rotation={[0, Math.PI / 2, Math.PI / 3]}
                  scale={[100, 10, 1]}
                />
              </Environment>
            </Canvas>

            <div className={styles.dragHint}>
              <span className={styles.dragHintDot} />
              Arrastra una credencial para interactuar
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Sobre el proyecto</h3>
          <p className={styles.infoText}>
            Este sitio recopila y narra los hechos de la campaña libertadora
            en Boyacá como parte del trabajo del Semillero de Investigación.
            El objetivo es reconstruir, con rigor histórico y recursos
            interactivos, el recorrido de las tropas patriotas desde Gámeza
            hasta el Pantano de Vargas.
          </p>
          <p className={styles.infoText}>
            Cada capítulo combina ilustración, animación y modelos 3D para
            acercar el relato histórico a una experiencia digital moderna,
            producida íntegramente por estudiantes del semillero.
          </p>

          <button type="button" className={styles.fuentesButton} onClick={irAFuentes}>
            Fuentes y Documentación
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ url, anchorPosition, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  };

  const { scene } = useGLTF(url);

  // El material "Realistic glass" del GLB viene sin grosor/rugosidad
  // definidos (solo transmisión), por lo que se ve deslavado/casi invisible.
  // Le damos algo de espesor y una capa satinada para que lea como vidrio o
  // plástico real, y activamos sombras en todas las mallas del modelo.
  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;
      child.castShadow = true;
      child.receiveShadow = true;
      const material = child.material;
      if (material?.transmission > 0 || material?.name === "Realistic glass") {
        material.transmission = 1;
        material.thickness = 0.35;
        material.roughness = 0.12;
        material.ior = 1.4;
        material.clearcoat = 0.5;
        material.clearcoatRoughness = 0.2;
        material.envMapIntensity = 1.3;
        material.needsUpdate = true;
      }
    });
  }, [scene]);

  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, CLIP_OFFSET, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        const d = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + d * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={anchorPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.6, 0.75, 0.05]} />
          <group
            scale={CARD_SCALE}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={(e) => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <primitive object={scene} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#111111"
          depthTest={false}
          resolution={[width, height]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
