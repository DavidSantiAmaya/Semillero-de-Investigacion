import { useState, useCallback, useEffect } from "react";
import { getAssetPath } from '../../utils/assetPath';
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HeroLanding.module.css";
import heroLandingData from "../../data/heroLandingData";
import { useContentIndexFromNavigation } from "../../utils/contentNavigation";

const CARD_TRANSITION = {
  type: "spring",
  stiffness: 130,
  damping: 24,
  mass: 0.85,
};

const MotionDiv = motion.div;
const MotionImg = motion.img;

const getCircularOffset = (index, current, total) => {
  const half = total / 2;
  return ((index - current + half + total) % total) - half;
};

const getCardState = (offset) => {
  const side = Math.sign(offset);
  const depth = Math.min(Math.abs(offset), 2);

  return {
    x: `${side * (depth === 1 ? 62 : 108)}%`,
    z: depth === 0 ? 90 : depth === 1 ? -120 : -280,
    rotateY: side * (depth === 1 ? -34 : -52),
    rotateZ: side * (depth === 1 ? 1.5 : 3),
    scale: depth === 0 ? 1 : depth === 1 ? 0.82 : 0.68,
    opacity: depth === 0 ? 1 : depth === 1 ? 1 : 0,
    filter: `blur(${depth === 2 ? 3 : 0}px)`,
    zIndex: 10 - depth,
  };
};

export default function HeroLanding({ slides = heroLandingData }) {
  const navigate = useNavigate();
  const initialSlideIndex = useContentIndexFromNavigation(slides);
  const [current, setCurrent] = useState(initialSlideIndex);
  const activeSlide = slides[current] ?? slides[0];

  useEffect(() => {
    setCurrent(initialSlideIndex);
  }, [initialSlideIndex]);

  const paginate = useCallback(
    (direction) => {
      if (!slides.length) return;
      setCurrent((prev) => (prev + direction + slides.length) % slides.length);
    },
    [slides.length]
  );

  if (!slides.length || !activeSlide) return null;

  return (
    <section className={styles.heroContainer}>
      <div className={styles.backgroundLayer}>
        <AnimatePresence mode="wait">
          <MotionImg
            key={activeSlide.id}
            src={activeSlide.background}
            alt={activeSlide.title}
            className={styles.backgroundImage}
            initial={{ opacity: 1, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 1, scale: 1.04 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.topBar}>
        <button className={styles.backButton} aria-label="Atrás" onClick={() =>
          navigate("/", {
            state: { direction: -1 },
          })
        }>
          ←
        </button>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className={styles.mainTitle}>{activeSlide.title}</h1>
              <p className={styles.subtitle}>{activeSlide.subtitle}</p>
              <p className={styles.description}>{activeSlide.description}</p>
              <button className={styles.exploreButton}>Explorar</button>
            </MotionDiv>
          </AnimatePresence>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.carouselContainer}>
            {slides.map((slide, index) => {
              const offset = getCircularOffset(index, current, slides.length);
              const isActive = index === current;

              if (Math.abs(offset) > 2) return null;

              return (
                <MotionDiv
                  key={slide.id}
                  className={styles.carouselCard}
                  animate={getCardState(offset)}
                  initial={false}
                  transition={CARD_TRANSITION}
                  aria-hidden={!isActive}
                >
                  <MotionDiv
                    className={styles.cardImageWrapper}
                    animate={{ rotateY: isActive ? 0 : Math.sign(offset) * -6 }}
                    transition={CARD_TRANSITION}
                  >
                    <MotionImg
                      src={slide.image}
                      alt={slide.title}
                      className={styles.cardImage}
                      animate={{
                        x: `${offset * -7}%`,
                        scale: isActive ? 1.08 : 1.16,
                      }}
                      transition={CARD_TRANSITION}
                    />
                    <div className={styles.cardOverlay} />
                    <div className={styles.cardGlow} />
                    <div className={styles.cardBadge}>Boyacá</div>
                  </MotionDiv>

                  <MotionDiv
                    className={styles.cardTitle}
                    animate={{ opacity: isActive ? 1 : 0.72, y: isActive ? 0 : -4 }}
                    transition={CARD_TRANSITION}
                  >
                    {slide.title}
                  </MotionDiv>
                </MotionDiv>
              );
            })}

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

          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === current ? styles.activeDot : ""
                  }`}
                onClick={() => setCurrent(index)}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





