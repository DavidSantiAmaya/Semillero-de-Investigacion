import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import "./capitulo7.css";
import { useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const posicionFinal = { x: 0.35, y: -0.15, z: 0, rotacionY: Math.PI * 1.45, escala: 0.55 };

function Modelo3D({ modeloRef }) {
  const { scene } = useGLTF("/Monumento.glb");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (modeloRef.current) {
      modeloRef.current.rotation.z =
        Math.sin(performance.now() * 0.00035) * 0.035;
    }
  });

  return (
    <primitive
      ref={modeloRef}
      object={scene}
    />
  );
}

export default function Capitulo7() {
  const seccionRef = useRef(null);
  const modeloRef = useRef(null);
  const controlesRef = useRef(null);
  const [termino, setTermino] = useState(false);
  const [inspeccionando, setInspeccionando] = useState(false);

  useGSAP(
    () => {
      const contexto = gsap.context(() => {
        const estado = { x: -0.45, y: 0.15, z: 0, rotacionY: -0.7, escala: 0.25 };
        const actualizarModelo = () => {
          if (!modeloRef.current) return;
          modeloRef.current.position.set(estado.x, estado.y, estado.z);
          modeloRef.current.rotation.y = estado.rotacionY;
          modeloRef.current.scale.setScalar(estado.escala);
        };

        actualizarModelo();
        gsap.to(estado, {
          ...posicionFinal,
          ease: "none",
          onUpdate: actualizarModelo,
          scrollTrigger: {
            trigger: seccionRef.current,
            start: "top top",
            end: "+=220%",
            scrub: 1,
            pin: ".capitulo7-lienzo",
            anticipatePin: 1,
            onEnterBack: () => setTermino(false),
            onLeave: () => setTermino(true),
          },
        });
      }, seccionRef);

      return () => contexto.revert();
    },
    { scope: seccionRef },
  );

  useEffect(() => {
    if (!inspeccionando || !modeloRef.current) return;
    gsap.to(modeloRef.current.rotation, { y: posicionFinal.rotacionY, duration: 0.45, ease: "power2.out" });
  }, [inspeccionando]);

  const alternarInspeccion = () => {
    const siguienteEstado = !inspeccionando;
    setInspeccionando(siguienteEstado);
    if (!siguienteEstado && modeloRef.current) {
      gsap.to(modeloRef.current.position, { x: posicionFinal.x, y: posicionFinal.y, z: posicionFinal.z, duration: 0.6, ease: "power3.out" });
      gsap.to(modeloRef.current.rotation, { y: posicionFinal.rotacionY, duration: 0.6, ease: "power3.out" });
      gsap.to(modeloRef.current.scale, { x: posicionFinal.escala, y: posicionFinal.escala, z: posicionFinal.escala, duration: 0.6, ease: "power3.out" });
      controlesRef.current?.reset();
    }
  };

  return (
    <section ref={seccionRef} className="capitulo7-escena" aria-label="Modelo interactivo del capítulo 7">
      <div className="capitulo7-lienzo">
        <Canvas shadows camera={{ position: [0, 0, 5.4], fov: 38 }} dpr={[1, 2]}>
          <color attach="background" args={["#ffffff"]} />
          <ambientLight intensity={1.8} />
          <directionalLight position={[4, 5, 4]} intensity={3.2} castShadow />
          <pointLight position={[-4, -2, 2]} intensity={18} color="#ffd7a6" />
          <Modelo3D modeloRef={modeloRef} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.16} />
          </mesh>
          <OrbitControls ref={controlesRef} enabled={inspeccionando} enablePan={false} minDistance={3.4} maxDistance={7} />
        </Canvas>
        <div className="capitulo7-copy" aria-hidden="true">
          <span>Capítulo VII</span>
          <h2>La huella de una batalla</h2>
          <p>Desplázate para descubrir la pieza.</p>
        </div>
        <button className="capitulo7-inspeccionar" type="button" onClick={alternarInspeccion} aria-pressed={inspeccionando} data-visible={termino}>
          {inspeccionando ? "Volver a la escena" : "Inspeccionar"}
        </button>
      </div>
    </section>
  );
}
