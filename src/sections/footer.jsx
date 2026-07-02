import { useEffect, useRef, useState } from "react";
import "./footer.css";

const sections = [
  { id: "capitulo1", label: "I" },
  { id: "capitulo2", label: "II" },
  { id: "capitulo3", label: "III" },
  { id: "capitulo4", label: "IV" },
  { id: "capitulo5", label: "V" },
  { id: "capitulo6", label: "VI" },
  { id: "capitulo7", label: "VII" },
];

export default function Footer() {
  const [show, setShow] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [overlayState, setOverlayState] = useState("hidden");

  // Posición de la cápsula
  const [sliderLeft, setSliderLeft] = useState(0);

  // Opacidad individual de cada número romano
  const [opacity, setOpacity] = useState(
    sections.map((_, i) => (i === 0 ? 1 : 0.18))
  );

  const progressBarRef = useRef(null);
  const buttonsRef = useRef([]);
  const transitionFrameRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const updateFooter = () => {
      const scroll = window.scrollY + window.innerHeight * 0.45;

      const first = document.getElementById("capitulo1");
      const last = document.getElementById("capitulo7");

      if (!first || !last) return;

      //-----------------------------------------
      // Mostrar footer
      //-----------------------------------------

      const start = first.offsetTop;
      const end = last.offsetTop + last.offsetHeight;

      setShow(scroll >= start && scroll <= end);

      //-----------------------------------------
      // Buscar el capítulo actual
      //-----------------------------------------

      let current = 0;

      for (let i = 0; i < sections.length; i++) {
        const currentSection = document.getElementById(sections[i].id);

        if (!currentSection) continue;

        const nextSection =
          i < sections.length - 1
            ? document.getElementById(sections[i + 1].id)
            : null;

        const currentTop = currentSection.offsetTop;

        const nextTop = nextSection
          ? nextSection.offsetTop
          : currentSection.offsetTop + currentSection.offsetHeight;

        if (scroll >= currentTop && scroll <= nextTop) {
          current = i;

          //-----------------------------------------
          // progreso entre capítulos
          //-----------------------------------------

          const distance = nextTop - currentTop;

          let progress = (scroll - currentTop) / distance;

          progress = Math.max(0, Math.min(1, progress));

          //-----------------------------------------
          // mover cápsula suavemente
          //-----------------------------------------

          const currentButton = buttonsRef.current[i];

          const nextButton =
            buttonsRef.current[
              Math.min(i + 1, buttonsRef.current.length - 1)
            ];

          if (currentButton && nextButton && progressBarRef.current) {
            const barRect =
              progressBarRef.current.getBoundingClientRect();

            const currentRect =
              currentButton.getBoundingClientRect();

            const nextRect =
              nextButton.getBoundingClientRect();

            const currentCenter =
              currentRect.left -
              barRect.left +
              currentRect.width / 2;

            const nextCenter =
              nextRect.left -
              barRect.left +
              nextRect.width / 2;

            const center =
              currentCenter +
              (nextCenter - currentCenter) * progress;

            setSliderLeft(center);
          }

          //-----------------------------------------
          // Cross Fade
          //-----------------------------------------

          const values = sections.map(() => 0.18);

          values[i] = 1 - progress * 0.82;

          if (i < sections.length - 1) {
            values[i + 1] = 0.18 + progress * 0.82;
          }

          setOpacity(values);

          break;
        }
      }
    };

    updateFooter();

    window.addEventListener("scroll", updateFooter, {
      passive: true,
    });

    window.addEventListener("resize", updateFooter);

    return () => {
      window.removeEventListener("scroll", updateFooter);
      window.removeEventListener("resize", updateFooter);
      if (transitionFrameRef.current) {
        cancelAnimationFrame(transitionFrameRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    if (isTransitioning) return;

    const section = document.getElementById(id);

    if (!section) return;

    const startY = window.scrollY;
    const targetY = Math.max(0, section.offsetTop);

    if (Math.abs(targetY - startY) < 2) return;

    const distance = targetY - startY;
    const duration = Math.min(1400, Math.max(900, Math.abs(distance) * 0.0024 + 900));

    setIsTransitioning(true);
    setOverlayState("show");

    const startTime = window.performance.now();

    const animateScroll = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const currentY = startY + distance * eased;

      window.scrollTo(0, currentY);

      if (progress < 1) {
        transitionFrameRef.current = requestAnimationFrame(animateScroll);
        return;
      }

      window.scrollTo(0, targetY);
      setOverlayState("hide");

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = window.setTimeout(() => {
        setOverlayState("hidden");
        setIsTransitioning(false);
      }, 850);
    };

    transitionFrameRef.current = requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <div
        className={`overlay ${overlayState === "show" ? "show" : overlayState === "hide" ? "hide" : ""}`}
        aria-hidden="true"
      />
      <footer className={`footer ${show ? "show" : "hide"}`}>
      <div
        className="progressBar"
        ref={progressBarRef}
      >
        {/* Cápsula deslizante */}
        <div
          className="slider"
          style={{
            left: sliderLeft,
          }}
        />

        {sections.map((section, index) => (
          <button
            key={section.id}
            ref={(el) => (buttonsRef.current[index] = el)}
            onClick={() => scrollToSection(section.id)}
            disabled={isTransitioning}
            style={{
              opacity: opacity[index],
            }}
          >
            {section.label}
          </button>
        ))}
      </div>
    </footer>
    </>
  );
}