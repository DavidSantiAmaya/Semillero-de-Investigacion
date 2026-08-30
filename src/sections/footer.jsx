import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "../utils/gsap";
import "./footer.css";

const sections = [
  { id: "titulo1", label: "I" },
  { id: "titulo2", label: "II" },
  { id: "titulo3", label: "III" },
  { id: "titulo4", label: "IV" },
  { id: "titulo5", label: "V" },
  { id: "titulo6", label: "VI" },
  { id: "titulo7", label: "VII" },
];

export default function Footer() {
  const [show, setShow] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [overlayState, setOverlayState] = useState("hidden");
  const [sliderLeft, setSliderLeft] = useState(0);

  const [opacity, setOpacity] = useState(
    sections.map((_, i) => (i === 0 ? 1 : 0.18))
  );

  const progressBarRef = useRef(null);
  const buttonsRef = useRef([]);
  const transitionFrameRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const activeSectionRef = useRef(0);
  const isTransitioningRef = useRef(false);

  const alignSliderToButton = (index) => {
    const button = buttonsRef.current[index];
    const bar = progressBarRef.current;

    if (!button || !bar) return;

    const barRect = bar.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const center =
      buttonRect.left -
      barRect.left +
      buttonRect.width / 2;

    setSliderLeft(center);
  };

  const activateSection = (index) => {
    if (index < 0 || index >= sections.length) return;

    activeSectionRef.current = index;

    requestAnimationFrame(() => {
      alignSliderToButton(index);
    });

    const values = sections.map(() => 0.18);
    values[index] = 1;

    setOpacity(values);
  };

  const getCompletedTitleSection = () => {
    const scrollTop = window.scrollY;

    let current = 0;

    for (let i = 1; i < sections.length; i++) {
      const title = document.getElementById(
        sections[i].id
      );

      const hero = title?.querySelector(".hero-section");
      const titleTrigger = ScrollTrigger.getAll().find(
        (trigger) => trigger.trigger === hero
      );

      if (!titleTrigger || scrollTop < titleTrigger.end) {
        break;
      }

      current = i;
    }

    return current;
  };

  const updateFooterVisibility = () => {
    const scroll =
      window.scrollY + window.innerHeight * 0.45;

    const first =
      document.getElementById("capitulo1");

    const last =
      document.getElementById("capitulo7");

    if (!first || !last) return;

    const start = first.offsetTop;
    const end =
      last.offsetTop + last.offsetHeight;

    setShow(
      scroll >= start &&
      scroll <= end
    );
  };

  useEffect(() => {
    const updateFooter = () => {
      updateFooterVisibility();

      if (isTransitioningRef.current) return;

      const current = getCompletedTitleSection();

      if (current !== activeSectionRef.current) {
        activateSection(current);
      }
    };

    const onResize = () => {
      updateFooterVisibility();
      requestAnimationFrame(() => {
        alignSliderToButton(activeSectionRef.current);
      });
    };

    requestAnimationFrame(() => {
      activateSection(0);
    });

    updateFooterVisibility();

    window.addEventListener(
      "scroll",
      updateFooter,
      { passive: true }
    );

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener(
        "scroll",
        updateFooter
      );

      window.removeEventListener("resize", onResize);

      if (transitionFrameRef.current) {
        cancelAnimationFrame(
          transitionFrameRef.current
        );
      }

      if (transitionTimeoutRef.current) {
        clearTimeout(
          transitionTimeoutRef.current
        );
      }
    };
  }, []);

  const scrollToSection = (id) => {
    if (isTransitioningRef.current) return;

    const section =
      document.getElementById(id);

    if (!section) return;

    const selectedIndex =
      sections.findIndex(
        (item) => item.id === id
      );

    if (selectedIndex === -1) return;

    activateSection(selectedIndex);

    const startY = window.scrollY;

    const targetY = Math.max(
      0,
      section.offsetTop +
        section.offsetHeight -
        window.innerHeight
    );

    if (
      Math.abs(targetY - startY) < 2
    ) {
      activateSection(selectedIndex);
      return;
    }

    const distance = targetY - startY;

    const duration = Math.min(
      1400,
      Math.max(
        900,
        Math.abs(distance) * 0.0024 + 900
      )
    );

    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setOverlayState("show");

    const startTime =
      window.performance.now();

    const animateScroll = (now) => {
      const elapsed =
        now - startTime;

      const progress = Math.min(
        1,
        elapsed / duration
      );

      const eased =
        progress < 0.5
          ? 4 *
            progress *
            progress *
            progress
          : 1 -
            Math.pow(
              -2 * progress + 2,
              3
            ) /
              2;

      const currentY =
        startY +
        distance * eased;

      window.scrollTo(
        0,
        currentY
      );

      if (progress < 1) {
        transitionFrameRef.current =
          requestAnimationFrame(
            animateScroll
          );

        return;
      }

      window.scrollTo(
        0,
        targetY
      );

      requestAnimationFrame(() => {
        activateSection(selectedIndex);
      });

      setOverlayState("hide");

      if (transitionTimeoutRef.current) {
        clearTimeout(
          transitionTimeoutRef.current
        );
      }

      transitionTimeoutRef.current =
        window.setTimeout(() => {
          setOverlayState("hidden");
          setIsTransitioning(false);
          isTransitioningRef.current = false;

          activateSection(
            selectedIndex
          );
        }, 850);
    };

    transitionFrameRef.current =
      requestAnimationFrame(
        animateScroll
      );
  };

  return (
    <>
      <div
        className={`overlay ${
          overlayState === "show"
            ? "show"
            : overlayState === "hide"
            ? "hide"
            : ""
        }`}
        aria-hidden="true"
      />

      <footer
        className={`footer ${
          show ? "show" : "hide"
        }`}
      >
        <div
          className="progressBar"
          ref={progressBarRef}
        >
          <div
            className="slider"
            style={{
              left: sliderLeft,
              transition:
                "left 0s, width .35s ease, background .35s ease, transform .35s ease",
            }}
          />

          {sections.map(
            (section, index) => (
              <button
                key={section.id}
                ref={(el) => {
                  buttonsRef.current[index] =
                    el;
                }}
                onClick={() =>
                  scrollToSection(
                    section.id
                  )
                }
                disabled={
                  isTransitioning
                }
                style={{
                  opacity:
                    opacity[index],
                  transition:
                    "opacity 0s, color .55s ease, transform .55s ease, filter .55s ease",
                }}
              >
                {section.label}
              </button>
            )
          )}
        </div>
      </footer>
    </>
  );
}
