import { useCallback, useEffect, useMemo, useState } from "react";
import "./HeroHistory.css";

export default function HeroHistory({
  events = [],
  initialIndex = 0,
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(1);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const activeEvent = events[activeIndex];

  useEffect(() => {
    setActiveIndex((currentIndex) => {
      setDirection(initialIndex >= currentIndex ? 1 : -1);
      return initialIndex;
    });
  }, [initialIndex]);

  const nextIndex = useMemo(
    () => (activeIndex + 1) % Math.max(events.length, 1),
    [activeIndex, events.length]
  );

  const step = useCallback(
    (amount) => {
      if (!events.length) return;

      const target =
        (activeIndex + amount + events.length) %
        events.length;

      setDirection(amount > 0 ? 1 : -1);
      setActiveIndex(target);
    },
    [activeIndex, events.length]
  );

  const handlePointerMove = (event) => {
    const bounds =
      event.currentTarget.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    setMouse({
      x:
        ((event.clientX - bounds.left) /
          bounds.width -
          0.5) *
        2,

      y:
        ((event.clientY - bounds.top) /
          bounds.height -
          0.5) *
        2,
    });
  };

  if (!activeEvent) return null;

  // =========================================================
  // SIEMPRE UTILIZAR EL PRIMER DISEÑO
  // =========================================================

  const fixedLayout = "panorama";

  // El timeline permanece siempre a la derecha.
  const timelineClass =
    "history-timeline history-timeline--right";

  return (
    <section
      className={`history-hero history-hero--${activeEvent.palette}`}
      onPointerMove={handlePointerMove}
      style={{
        "--tilt-x": `${mouse.y * -5}deg`,
        "--tilt-y": `${mouse.x * 7}deg`,
        "--parallax-x": `${mouse.x * 18}px`,
        "--parallax-y": `${mouse.y * 18}px`,
      }}
    >
      {/* =====================================================
          AMBIENTE
          ===================================================== */}

      <div
        className="history-hero__ambient"
        aria-hidden="true"
      />

      <div
        className="history-hero__grain"
        aria-hidden="true"
      />

      {/* =====================================================
          TIMELINE
          SIEMPRE A LA DERECHA
          ===================================================== */}

      <aside
        className={timelineClass}
        aria-label="Eventos históricos"
      >
        {events.map((event, index) => (
          <div
            className={`history-timeline__item ${
              index === activeIndex
                ? "is-active"
                : ""
            }`}
            key={event.id}
            aria-current={
              index === activeIndex
                ? "step"
                : undefined
            }
            onClick={() =>
              step(index - activeIndex)
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" ||
                e.key === " "
              ) {
                e.preventDefault();
                step(index - activeIndex);
              }
            }}
          >
            <span className="history-timeline__image">
              <img
                src={event.thumbnail}
                alt=""
              />
            </span>

            <span className="history-timeline__meta">
              <strong>{event.title}</strong>

              <small>{event.eyebrow}</small>
            </span>
          </div>
        ))}
      </aside>

      {/* =====================================================
          ESCENA PRINCIPAL
          ===================================================== */}

      <div
        className={`history-scene history-scene--${fixedLayout}`}
        key={activeEvent.id}
        data-direction={direction}
      >
        {/* ===================================================
            COLUMNA IZQUIERDA
            =================================================== */}

        <div className="history-scene__text-column">
          {/* TEXTO PRINCIPAL */}

          <div className="history-scene__copy">
            <p className="history-scene__eyebrow">
              {activeEvent.eyebrow}
            </p>

            <h1>
              {activeEvent.title}
            </h1>

            <p className="history-scene__lead">
              {activeEvent.lead}
            </p>

            <p className="history-scene__body">
              {activeEvent.body}
            </p>
          </div>

          {/* =================================================
              ESTADÍSTICAS
              ================================================= */}

          <div className="history-scene__detail">
            <div
              className="history-stats"
              aria-label="Datos clave"
            >
              {activeEvent.stats?.map(
                (stat) => (
                  <span
                    className="history-stat"
                    key={`${activeEvent.id}-${stat.label}`}
                  >
                    <small>
                      {stat.label}
                    </small>

                    <strong>
                      {stat.value}
                    </strong>
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ===================================================
            COLUMNA DERECHA
            IMAGEN
            =================================================== */}

        <div
          className="history-scene__visual"
          aria-label={activeEvent.title}
        >
          <div
            className="history-orbit history-orbit--back"
            aria-hidden="true"
          />

          <figure className="history-frame">
            <img
              src={activeEvent.image}
              alt={activeEvent.title}
            />
          </figure>

          <div
            className="history-orbit history-orbit--front"
            aria-hidden="true"
          />

          <div className="history-place-card">
            <span>
              {activeEvent.date}
            </span>

            <strong>
              {activeEvent.place}
            </strong>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
          MÁS PEGADO AL CONTENIDO
          ===================================================== */}

      <footer
        className="history-hero__footer"
        style={{
          marginTop: "-90px",
        }}
      >
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Evento anterior"
        >
          Anterior
        </button>

        <div
          className="history-progress"
          aria-hidden="true"
        >
          <span
            style={{
              width: `${
                ((activeIndex + 1) /
                  Math.max(
                    events.length,
                    1
                  )) *
                100
              }%`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Evento siguiente"
        >
          Siguiente
        </button>
      </footer>
    </section>
  );
}