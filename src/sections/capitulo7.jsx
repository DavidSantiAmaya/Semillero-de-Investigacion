import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import "./capitulo7.css";

gsap.registerPlugin(ScrollTrigger);
useGLTF.preload("/Monumento.glb");

const posiciones = [
  {
    x: 2.65, y: -2.5, z: 1.75,
    rotacionY: -1.05,
    escala: 0.50,
  },
  {
    x: -0.30, y: -6, z: -8.5,
    rotacionY: -0.2,
    escala: 2.5,
  },
  {
    x: 1.75, y: -3, z: -3,
    rotacionY: 0.7,
    escala: 0.75,
  },
  {
    x: -1.55, y: -3, z: -1.75,
    rotacionY: Math.PI * 1.65,
    escala: 0.85,
  },
];

const relatos = [
  {
    lado: "izquierda",
    // Cambia estos valores para controlar dónde aparece y desaparece este texto.
    entrada: { x: "5vw", y: "35vh" },
    visible: { x: "0vw", y: "0vh" },
    salida: { x: "0vw", y: "-160vh" },
    texto:
      "En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas, vino a agotarse parte de la fatiga de la campaña libertadora. Tras los combates de Gámeza y Tópaga, las columnas patriotas avanzaron exhaustas: hombres helados, con los uniformes hechos jirones, algunos descalzos, pero firmes en su decisión de seguir adelante.",
  },
  {
    lado: "derecha",
    entrada: { x: "120vw", y: "0vh" },
    visible: { x: "0vw", y: "0vh" },
    salida: { x: "0vw", y: "-160vh" },
    texto:
      "No marchaban solo contra el enemigo, sino también contra el cansancio y el hambre. Cada paso por estas montañas exigía sostener la esperanza cuando el cuerpo ya no podía más. La campaña se abrió camino gracias a quienes decidieron no detenerse.",
  },
  {
    lado: "izquierda",
    entrada: { x: "-120vw", y: "45vh" },
    visible: { x: "0vw", y: "45vh" },
    salida: { x: "0vw", y: "-160vh" },
    texto:
      "El paisaje conserva las huellas de ese tránsito. Los caminos, el frío y las pendientes recuerdan que la libertad no fue un instante aislado: fue una suma de esfuerzos, pérdidas y decisiones tomadas en medio de la incertidumbre.",
  },
  {
    lado: "derecha",
    entrada: { x: "120vw", y: "0vh" },
    visible: { x: "0vw", y: "0vh" },
    salida: { x: "0vw", y: "-160vh" },
    texto:
      "Estas montañas no son un simple escenario. Son testigos del desgaste que precedió a la Batalla del Pantano de Vargas y de la determinación con la que los patriotas continuaron hasta transformar el rumbo de la historia.",
  },
];

// Ajusta y para subir (valor menor) o bajar (valor mayor) el modelo al inspeccionarlo.
const objetivoInspeccion = { x: 0, y: 0.5, z: -1 };

function RenderizadorInvalidador({ invalidarRef }) {
  const { invalidate } = useThree();

  useEffect(() => {
    invalidarRef.current = invalidate;
    return () => {
      invalidarRef.current = null;
    };
  }, [invalidate, invalidarRef]);

  return null;
}

function Modelo3D({ modeloRef, alCargar }) {
  const { scene } = useGLTF("/Monumento.glb");

  useEffect(() => {
    alCargar();
  }, [alCargar, scene]);

  return <primitive ref={modeloRef} object={scene} dispose={null} />;
}

export default function Capitulo7() {
  const seccionRef = useRef(null);
  const lienzoRef = useRef(null);
  const modeloRef = useRef(null);
  const controlesRef = useRef(null);
  const panelesRef = useRef([]);
  const estadoRef = useRef({ ...posiciones[0] });
  const invalidarLienzoRef = useRef(null);
  const [termino, setTermino] = useState(false);
  const [inspeccionando, setInspeccionando] = useState(false);

  const actualizarModelo = useCallback(() => {
    if (!modeloRef.current) return;

    const estado = estadoRef.current;
    modeloRef.current.position.set(estado.x, estado.y, estado.z);
    modeloRef.current.rotation.y = estado.rotacionY;
    modeloRef.current.scale.setScalar(estado.escala);
    invalidarLienzoRef.current?.();
  }, []);

  useEffect(() => {
    if (!inspeccionando || !modeloRef.current) return undefined;

    const controles = controlesRef.current;
    if (!controles) return undefined;
    const actualizarControles = () => {
      controles?.update();
      invalidarLienzoRef.current?.();
    };

    const enfoque = gsap.to(controles.target, {
      ...objetivoInspeccion,
      duration: 0.7,
      ease: "power2.out",
      onUpdate: actualizarControles,
    });

    const animacion = gsap.to(modeloRef.current.rotation, {
      y: posiciones[3].rotacionY,
      duration: 0.45,
      ease: "power2.out",
      onUpdate: () => invalidarLienzoRef.current?.(),
    });

    return () => {
      enfoque.kill();
      animacion.kill();
    };
  }, [inspeccionando]);

  useGSAP(
    () => {
      actualizarModelo();

      const paneles = panelesRef.current;
      paneles.forEach((panel, indice) => {
        gsap.set(panel, relatos[indice].entrada);
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          pin: lienzoRef.current,
          anticipatePin: 1,
          onEnterBack: () => {
            setTermino(false);
            setInspeccionando(false);
            controlesRef.current?.reset();
            invalidarLienzoRef.current?.();
          },
          onLeave: () => {
            setTermino(true);
            setInspeccionando(true);
          },
        },
      });

      posiciones.slice(1).forEach((posicion, indice) => {
        const textoActual = paneles[indice];
        const textoSiguiente = paneles[indice + 1];

        tl.to(estadoRef.current, {
          ...posicion,
          duration: 1,
          ease: "none",
          onUpdate: actualizarModelo,
        })
          .to(textoActual, {
            ...relatos[indice].salida,
            duration: 0.42,
            ease: "power2.in",
          }, "<")
          .to(textoSiguiente, {
            ...relatos[indice + 1].visible,
            duration: 0.58,
            ease: "power2.out",
          }, "<0.24");
      });
    },
    { scope: seccionRef, dependencies: [actualizarModelo] },
  );

  const alternarInspeccion = () => {
    const siguienteEstado = !inspeccionando;
    setInspeccionando(siguienteEstado);

    if (!siguienteEstado && modeloRef.current) {
      gsap.to(modeloRef.current.position, {
        x: posiciones[3].x,
        y: posiciones[3].y,
        z: posiciones[3].z,
        duration: 0.6,
        ease: "power3.out",
        onUpdate: () => invalidarLienzoRef.current?.(),
      });
      gsap.to(modeloRef.current.rotation, {
        y: posiciones[3].rotacionY,
        duration: 0.6,
        ease: "power3.out",
        onUpdate: () => invalidarLienzoRef.current?.(),
      });
      gsap.to(modeloRef.current.scale, {
        x: posiciones[3].escala,
        y: posiciones[3].escala,
        z: posiciones[3].escala,
        duration: 0.6,
        ease: "power3.out",
        onUpdate: () => invalidarLienzoRef.current?.(),
      });
      controlesRef.current?.reset();
    }
  };

  return (
    <section ref={seccionRef} className="capitulo7-escena" aria-label="Modelo interactivo del capítulo 7">
      <div ref={lienzoRef} className="capitulo7-lienzo">
        <Canvas
          camera={{ position: [0, -1.5, 8], fov: 55 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <color attach="background" args={["#ffffff"]} />
          <ambientLight intensity={1.8} />
          <directionalLight position={[6, 7.5, 5]} intensity={3.2} />
          <pointLight position={[-8, -4, 4]} intensity={18} color="#ffd7a6" />
          <Suspense fallback={null}>
            <Modelo3D modeloRef={modeloRef} alCargar={actualizarModelo} />
          </Suspense>
          <OrbitControls
            ref={controlesRef}
            enabled={inspeccionando}
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            minDistance={2.5}
            maxDistance={24}
            onChange={() => invalidarLienzoRef.current?.()}
          />
          <RenderizadorInvalidador invalidarRef={invalidarLienzoRef} />
        </Canvas>
        <div className="capitulo7-textos" aria-label="Relato de la campaña libertadora">
          {relatos.map(({ lado, texto }, indice) => (
            <p
              key={texto}
              ref={(elemento) => {
                panelesRef.current[indice] = elemento;
              }}
              className={`capitulo7-copy capitulo7-copy--${lado}`}
            >
              {texto}
            </p>
          ))}
        </div>
        <button className="capitulo7-inspeccionar" type="button" onClick={alternarInspeccion} aria-pressed={inspeccionando} data-visible={termino}>
          {inspeccionando ? "Volver a la escena" : "Inspeccionar"}
        </button>
      </div>
    </section>
  );
}
