import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import "./capitulo7.css";

gsap.registerPlugin(ScrollTrigger);

const posicionInicial = {
  x: -1.45,
  y: 0.95,
  z: 0,
  rotacionY: -0.65,
  escala: 0.18,
};

const etapas = [
  { x: -1.2, y: 0.7, z: 0, rotacionY: -0.5, escala: 0.22 },
  { x: -0.4, y: 0.35, z: 0, rotacionY: -0.25, escala: 0.3 },
  { x: 0.45, y: 0, z: 0, rotacionY: 0.3, escala: 0.42 },
  { x: 1.15, y: -0.2, z: 0, rotacionY: 0.55, escala: 0.55 },
];

const posicionFinal = etapas[etapas.length - 1];

function Modelo3D({ modeloRef, estadoRef, inspeccionandoRef }) {
  const { scene } = useGLTF("/Monumento.glb");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (!modeloRef.current) return;

    if (!inspeccionandoRef.current) {
      const estado = estadoRef.current;
      modeloRef.current.position.set(estado.x, estado.y, estado.z);
      modeloRef.current.rotation.y += (estado.rotacionY - modeloRef.current.rotation.y) * 0.08;
      modeloRef.current.scale.setScalar(estado.escala);
    }

    // Un gesto apenas perceptible evita que el monumento se sienta inmóvil
    // mientras espera el siguiente tramo de la narración.
    modeloRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.7) * 0.035;
  });

  return <primitive ref={modeloRef} object={scene} />;
}

export default function Capitulo7() {
  const seccionRef = useRef(null);
  const panelesRef = useRef([]);
  const modeloRef = useRef(null);
  const controlesRef = useRef(null);
  const botonRef = useRef(null);
  const estadoRef = useRef({ ...posicionInicial });
  const inspeccionandoRef = useRef(false);
  const [termino, setTermino] = useState(false);
  const [inspeccionando, setInspeccionando] = useState(false);

  useEffect(() => {
    inspeccionandoRef.current = inspeccionando;
  }, [inspeccionando]);

  useGSAP(
    () => {
      const contexto = gsap.context(() => {
        const recorrido = gsap.timeline({
          scrollTrigger: {
            trigger: seccionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        etapas.forEach((etapa) => {
          recorrido.to(estadoRef.current, {
            ...etapa,
            duration: 1,
            ease: "none",
          });
        });

        panelesRef.current.forEach((panel, indice) => {
          if (!panel) return;

          const texto = panel.querySelector(".capitulo7-texto");
          if (!texto) return;

          gsap.fromTo(
            texto,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 72%",
                end: "top 35%",
                scrub: 0.8,
              },
            },
          );

          if (indice === etapas.length - 1) {
            ScrollTrigger.create({
              trigger: panel,
              start: "top -55%",
              onEnter: () => setTermino(true),
              onLeaveBack: () => setTermino(false),
            });
          }
        });
      }, seccionRef);

      return () => contexto.revert();
    },
    { scope: seccionRef },
  );

  useEffect(() => {
    if (!botonRef.current) return undefined;

    const animacion = termino
      ? gsap.to(botonRef.current, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" })
      : gsap.set(botonRef.current, { autoAlpha: 0, y: 12 });

    return () => animacion.kill?.();
  }, [termino]);

  const alternarInspeccion = () => {
    const siguienteEstado = !inspeccionando;
    setInspeccionando(siguienteEstado);

    if (!siguienteEstado) {
      gsap.to(estadoRef.current, {
        x: posicionFinal.x,
        y: posicionFinal.y,
        z: posicionFinal.z,
        rotacionY: posicionFinal.rotacionY,
        escala: posicionFinal.escala,
        duration: 0.6,
        ease: "power3.out",
      });
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
          <Modelo3D modeloRef={modeloRef} estadoRef={estadoRef} inspeccionandoRef={inspeccionandoRef} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.16} />
          </mesh>
          <OrbitControls ref={controlesRef} enabled={inspeccionando} enablePan={false} minDistance={3.4} maxDistance={7} />
        </Canvas>
        <button
          ref={botonRef}
          className="capitulo7-inspeccionar"
          type="button"
          onClick={alternarInspeccion}
          aria-pressed={inspeccionando}
          data-visible={termino}
        >
          {inspeccionando ? "Volver a la escena" : "Inspeccionar"}
        </button>
      </div>

      <div className="capitulo7-paneles">
        <article ref={(elemento) => { panelesRef.current[0] = elemento; }} className="capitulo7-panel capitulo7-panel--derecha">
          <p className="capitulo7-texto">Pasamos ahora a otro tiempo: muchos años después, frente al Monumento de los Lanceros en este mismo lugar donde el estruendo de la guerra fue decisivo, y tras la retirada realista, el ejército patriota marchó por Tunja y se encontró por última vez con el enemigo en el puente de Boyacá, episodio que pertenece a otra historia que se contará después.</p>
        </article>
        <article ref={(elemento) => { panelesRef.current[1] = elemento; }} className="capitulo7-panel capitulo7-panel--izquierda">
          <p className="capitulo7-texto">En este lugar quedó fija una memoria. Aquí se conmemora la carga y se nombra a Rondón y a los catorce lanceros que la tradición convirtió en símbolo. El monumento magnifica un instante y lo vuelve imagen: un gesto que, según la inscripción, salvó la patria. Pero la historia es más amplia y compleja que una sola escena.</p>
        </article>
        <article ref={(elemento) => { panelesRef.current[2] = elemento; }} className="capitulo7-panel capitulo7-panel--derecha">
          <p className="capitulo7-texto">«En este lugar se salvó la patria…». Recordar no es solo repetir un nombre, alzar una estatua o fijar una fecha, sino comprender la suma de decisiones, sacrificios y voluntades que hicieron posible la victoria.</p>
        </article>
        <article ref={(elemento) => { panelesRef.current[3] = elemento; }} className="capitulo7-panel capitulo7-panel--izquierda">
          <p className="capitulo7-texto">El relato termina donde empezó: frente a la piedra que recuerda. Aquí queda la valentía de Rondón y sus lanceros, pero también la memoria de todos los que lucharon. Eso es lo que el monumento intenta conservar, y lo que cada generación debe volver a preguntarse al mirarlo.</p>
        </article>
      </div>
    </section>
  );
}
