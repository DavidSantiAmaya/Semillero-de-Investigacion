import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "../../src/BolivarExperience.css";

const heroCards = [
  {
    title: "El Libertador",
    year: "1783–1830",
    image: "/bolivar/portrait-1.png",
    frontLabel: "Simón Bolívar",
    frontText:
      "Líder clave de los procesos de independencia en América del Sur. Esta tarjeta resume su legado, su visión política y su papel como estratega.",
    backTitle: "Idea central",
    backText:
      "Unificar territorios, impulsar la libertad y construir nuevas repúblicas. La composición busca un estilo editorial, solemne y cinematográfico.",
  },
  {
    title: "Campaña Admirable",
    year: "1813",
    image: "/bolivar/campana-admirable.png",
    frontLabel: "Avance histórico",
    frontText:
      "Una de las campañas más recordadas por su energía militar y su impacto en el camino hacia la independencia.",
    backTitle: "Dato histórico",
    backText:
      "La pieza está pensada para mostrar un tono documental, con contraste alto y texto breve, ideal para presentar en swipe.",
  },
  {
    title: "Cruce de los Andes",
    year: "1819",
    image: "/bolivar/cruce-andes.jpg",
    frontLabel: "Estrategia",
    frontText:
      "Un momento decisivo que representa resistencia, táctica y liderazgo. Perfecto para una tarjeta de impacto visual.",
    backTitle: "Narrativa visual",
    backText:
      "Este lado puede mostrar un resumen histórico, una cita o un detalle del evento con una imagen secundaria.",
  },
  {
    title: "Unidad continental",
    year: "1826",
    image: "/bolivar/unidad-continental.png",
    frontLabel: "Proyecto político",
    frontText:
      "Una visión que buscaba conectar territorios y fortalecer la idea de América Latina como bloque.",
    backTitle: "Mensaje final",
    backText:
      "Puedes usar esta tarjeta como cierre de la experiencia, con una frase potente y una imagen de fondo sobria.",
  },
];

const accordionItems = [
  {
    title: "Retrato oficial",
    subtitle: "Imagen principal para portada",
    image: "/bolivar/portrait-1.png",
    description:
      "Usa esta sección para abrir la experiencia con el retrato más fuerte del personaje y un texto corto de introducción.",
  },
  {
    title: "Campaña de 1813",
    subtitle: "Movimiento, avance y conquista",
    image: "/bolivar/campana-admirable.png",
    description:
      "Este panel puede contar una etapa clave con una imagen más dinámica y un título más narrativo.",
  },
  {
    title: "Cruce de los Andes",
    subtitle: "Uno de los hitos más famosos",
    image: "/bolivar/cruce-andes.jpg",
    description:
      "Ideal para destacar una escena épica. Al expandirse, el texto aparece con más aire y la imagen toma protagonismo.",
  },
  {
    title: "Legado",
    subtitle: "Repúblicas y memoria histórica",
    image: "/bolivar/legado.png",
    description:
      "Cierra con una imagen simbólica, una frase memorable y una composición limpia para que el diseño se sienta editorial.",
  },
];

export default function BolivarExperience() {
  const [activeCard, setActiveCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const tilt = useTransform(x, [-220, 0, 220], [10, 0, -10]);

  const card = heroCards[activeCard];
  const nextCard = heroCards[(activeCard + 1) % heroCards.length];

  const currentAccordion = useMemo(
    () => accordionItems[activeAccordion],
    [activeAccordion]
  );

  const goNext = () => {
    setFlipped(false);
    setActiveCard((prev) => (prev + 1) % heroCards.length);
  };

  const goPrev = () => {
    setFlipped(false);
    setActiveCard((prev) => (prev - 1 + heroCards.length) % heroCards.length);
  };

  const handleDragEnd = (_, info) => {
    const threshold = 90;

    if (info.offset.x < -threshold) {
      goNext();
    } else if (info.offset.x > threshold) {
      goPrev();
    }

    setTimeout(() => {
      setIsDragging(false);
    }, 120);
  };

  return (
    <main className="bolivar-page">
      <section className="bolivar-hero">
        <div className="hero-copy">
          <p className="kicker">Historia · Swipe · Accordion</p>

          <h1>EL LIBERTADOR</h1>
          <h2>Simón Bolívar (1783–1830)</h2>

          <p className="hero-description">
            Una plantilla visual con tarjeta giratoria por gesto y un accordion
            de imágenes para presentar la historia con una estética elegante,
            tipo portada editorial.
          </p>

          <p className="hero-note">
            Desliza la tarjeta a la izquierda o derecha para cambiar de escena.
            Toca la tarjeta para ver el reverso y volver a tocar para regresar al frente.
          </p>
        </div>

        <div className="flip-stage" style={{ perspective: "1600px" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "680px",
            }}
          >
            <motion.div
              className="flip-card"
              animate={{
                x: 18,
                y: 18,
                scale: 0.96,
                opacity: 0.55,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                transformStyle: "preserve-3d",
                pointerEvents: "none",
              }}
            >
              <div className="face front">
                <img src={nextCard.image} alt={nextCard.title} />

                <div className="front-overlay">
                  <span className="year-badge">{nextCard.year}</span>
                  <h3>{nextCard.title}</h3>
                  <p className="front-label">{nextCard.frontLabel}</p>
                  <p>{nextCard.frontText}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flip-card"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              onClick={() => {
                if (!isDragging) {
                  setFlipped((prev) => !prev);
                }
              }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                x,
                rotateZ: tilt,
                transformStyle: "preserve-3d",
                cursor: "pointer",
              }}
            >
              <div className="face front">
                <img src={card.image} alt={card.title} />

                <div className="front-overlay">
                  <span className="year-badge">{card.year}</span>
                  <h3>{card.title}</h3>
                  <p className="front-label">{card.frontLabel}</p>
                  <p>{card.frontText}</p>
                </div>
              </div>

              <div className="face back">
                <div className="back-panel">
                  <p className="back-kicker">Tarjeta reversa</p>
                  <h3>{card.backTitle}</h3>
                  <p>{card.backText}</p>
                  <p className="back-tip">
                    Detrás de esta carta ya está la siguiente, lista para seguir
                    la historia.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="accordion-section">
        <div className="section-head">
          <p className="kicker">Image Accordion</p>
          <h2>Galería histórica de Bolívar</h2>
        </div>

        <div className="accordion">
          {accordionItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`accordion-item ${
                activeAccordion === index ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveAccordion(index);
                setFlipped(false);
              }}
              style={{ backgroundImage: `url(${item.image})` }}
              aria-pressed={activeAccordion === index}
            >
              <span className="accordion-shade" />
              <div className="accordion-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeAccordion}
            className="detail-card"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.35 }}
          >
            <img src={currentAccordion.image} alt={currentAccordion.title} />

            <div className="detail-copy">
              <p className="kicker">Detalle activo</p>
              <h3>{currentAccordion.title}</h3>
              <p>{currentAccordion.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}