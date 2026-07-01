import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero({ personaje }) {
  const hero = personaje.hero;

  const [activeCard, setActiveCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const tilt = useTransform(x, [-220, 0, 220], [10, 0, -10]);

  const card = hero.cards[activeCard];
  const nextCard = hero.cards[(activeCard + 1) % hero.cards.length];

  const goNext = () => {
    setFlipped(false);
    setActiveCard((prev) => (prev + 1) % hero.cards.length);
  };

  const goPrev = () => {
    setFlipped(false);
    setActiveCard(
      (prev) => (prev - 1 + hero.cards.length) % hero.cards.length
    );
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
    <section className="bolivar-hero">
      <div className="hero-copy">
        <p className="kicker">{hero.kicker}</p>

        <h1>{hero.title}</h1>
        <h2>{hero.subtitle}</h2>

        <p className="hero-description">{hero.description}</p>
        <p className="hero-note">{hero.note}</p>
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
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
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
                  Desliza para continuar la historia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
