import { useState, useCallback, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HeroLanding.module.css";

export default function HeroLanding({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const activeSlide = slides[current] ?? slides[0];
  const prevIndex = (current - 1 + slides.length) % slides.length;
  const nextIndex = (current + 1) % slides.length;
  const prevSlide = slides[prevIndex] ?? slides[0];
  const nextSlide = slides[nextIndex] ?? slides[0];

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection > 0) {
        return prev + 1 >= slides.length ? 0 : prev + 1;
      }
      return prev - 1 < 0 ? slides.length - 1 : prev - 1;
    });
  }, [slides.length]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const cardVariants = {
    left: {
      x: "-120%",
      scale: 0.85,
      opacity: 0.6,
      zIndex: 1,
    },
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 3,
    },
    right: {
      x: "120%",
      scale: 0.85,
      opacity: 0.6,
      zIndex: 1,
    },
  };

  if (!slides.length || !activeSlide) {
    return null;
  }

  return (
    <section className={styles.heroContainer} ref={containerRef}>
      {/* Fondo cinematográfico dinámico */}
      <div className={styles.backgroundLayer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.id}
            src={activeSlide.background}
            alt={activeSlide.title}
            className={styles.backgroundImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
        <div className={styles.backgroundOverlay} />
      </div>

      {/* Barra decorativa superior */}
      <div className={styles.topBar}>
        <button className={styles.backButton} aria-label="Atrás">
          ←
        </button>
        <div className={styles.decorativeLine}>
          <span className={styles.decorator} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className={styles.mainContent}>
        {/* Sección izquierda dinámica */}
        <div className={styles.leftSection}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className={styles.mainTitle}>{activeSlide.title}</h1>
              <p className={styles.subtitle}>{activeSlide.subtitle}</p>
              <p className={styles.description}>{activeSlide.description}</p>
              <button className={styles.exploreButton}>Explorar</button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Galería de tarjetas con carrusel de 3 visibles */}
        <div className={styles.rightSection}>
          <div className={styles.carouselContainer}>
            <AnimatePresence mode="wait">
              {/* Tarjeta anterior */}
              <motion.div
                key={`prev-${prevSlide.id}`}
                variants={cardVariants}
                initial="left"
                animate="left"
                exit="left"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.carouselCard}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={prevSlide.image}
                    alt={prevSlide.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardBadge}>Boyacá</div>
                </div>
                <div className={styles.cardTitle}>{prevSlide.title}</div>
              </motion.div>

              {/* Tarjeta central (activa) */}
              <motion.div
                key={`center-${activeSlide.id}`}
                variants={cardVariants}
                initial="center"
                animate="center"
                exit="center"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.carouselCard}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardBadge}>Boyacá</div>
                </div>
                <div className={styles.cardTitle}>{activeSlide.title}</div>
              </motion.div>

              {/* Tarjeta siguiente */}
              <motion.div
                key={`next-${nextSlide.id}`}
                variants={cardVariants}
                initial="right"
                animate="right"
                exit="right"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.carouselCard}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={nextSlide.image}
                    alt={nextSlide.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardBadge}>Boyacá</div>
                </div>
                <div className={styles.cardTitle}>{nextSlide.title}</div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de navegación */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={() => paginate(-1)}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={() => paginate(1)}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>

          {/* Indicadores */}
          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === current ? styles.activeDot : ""
                }`}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}