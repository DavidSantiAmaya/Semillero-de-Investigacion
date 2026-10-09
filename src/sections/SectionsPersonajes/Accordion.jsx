import { useEffect, useRef } from "react";

export default function Accordion({ personajes, personajeActivo, onSelect }) {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const scrollToPersonaje = (index, behavior = "smooth") => {
    const carousel = carouselRef.current;
    const item = itemRefs.current[index];

    if (!carousel || !item) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    carousel.scrollTo({
      left: item.offsetLeft,
      behavior: reducedMotion ? "auto" : behavior,
    });
  };

  const selectPersonaje = (index, shouldScroll = false) => {
    onSelect(index);
    if (shouldScroll) scrollToPersonaje(index);
  };

  const handleScroll = () => {
    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      const carousel = carouselRef.current;
      if (!carousel) {
        frameRef.current = null;
        return;
      }

      const closestIndex = itemRefs.current.reduce(
        (selectedIndex, item, index) => {
          const selectedItem = itemRefs.current[selectedIndex];
          const itemDistance = Math.abs(item.offsetLeft - carousel.scrollLeft);
          const selectedDistance = Math.abs(
            selectedItem.offsetLeft - carousel.scrollLeft,
          );

          return itemDistance < selectedDistance ? index : selectedIndex;
        },
        0,
      );

      if (closestIndex !== personajeActivo) onSelect(closestIndex);
      frameRef.current = null;
    });
  };

  const handleKeyDown = (event, index) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = Math.min(
      Math.max(index + direction, 0),
      personajes.length - 1,
    );

    if (nextIndex === index) return;

    selectPersonaje(nextIndex, true);
    itemRefs.current[nextIndex]?.focus({ preventScroll: true });
  };

  return (
    <section
      className="accordion-section"
      aria-label="Personajes históricos de la Batalla del Pantano de Vargas"
    >
      <div className="section-head">
        <p className="kicker">Personajes históricos</p>
        <h2>Batalla del Pantano de Vargas</h2>
      </div>

      <div className="accordion-container">
        <div
          ref={carouselRef}
          className="accordion"
          onScroll={handleScroll}
        >
          {personajes.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              type="button"
              className={`accordion-item ${
                personajeActivo === index ? "is-active" : ""
              }`}
              aria-current={personajeActivo === index ? "true" : undefined}
              onClick={() => selectPersonaje(index, true)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              style={{
                backgroundImage: `url(${item.accordion.image})`,
              }}
            >
              <span className="accordion-shade" />

              <div className="accordion-content">
                <h3>{item.accordion.title}</h3>
                <p>{item.accordion.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="accordion-navigation" aria-label="Navegación del carrusel">
          <p className="accordion-position" aria-live="polite">
            {personajeActivo + 1} de {personajes.length}
          </p>
          <div className="accordion-dots">
            {personajes.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={personajeActivo === index ? "is-active" : ""}
                aria-label={`Ver ${item.accordion.title} (${index + 1} de ${personajes.length})`}
                aria-pressed={personajeActivo === index}
                onClick={() => selectPersonaje(index, true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
