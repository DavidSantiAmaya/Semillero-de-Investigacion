import { useCallback, useEffect, useRef, useState } from "react";
import { useBackgroundAudio } from "../audio/AudioProvider";
import "./FloatingControls.css";

const AUTO_SCROLL_SPEED = 90; // px por segundo
const AUTO_SCROLL_STOP_EVENTS = ["wheel", "touchstart", "keydown"];

function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggle = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  return [isFullscreen, toggle];
}

function useAutoScroll() {
  const [active, setActive] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    let last = performance.now();

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      window.scrollBy(0, AUTO_SCROLL_SPEED * dt);

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  // Si el usuario intenta scrollear/interactuar manualmente, le devolvemos el control.
  useEffect(() => {
    if (!active) return undefined;

    const stop = () => setActive(false);
    AUTO_SCROLL_STOP_EVENTS.forEach((eventName) =>
      window.addEventListener(eventName, stop, { passive: true })
    );
    return () => {
      AUTO_SCROLL_STOP_EVENTS.forEach((eventName) =>
        window.removeEventListener(eventName, stop)
      );
    };
  }, [active]);

  const toggle = useCallback(() => setActive((prev) => !prev), []);
  return [active, toggle];
}

export default function FloatingControls() {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const [autoScrolling, toggleAutoScroll] = useAutoScroll();
  const { enabled: musicEnabled, toggle: toggleMusic } = useBackgroundAudio();

  return (
    <div className="floating-controls" role="toolbar" aria-label="Controles de la página">
      <button
        type="button"
        className={`fc-button${isFullscreen ? " fc-active" : ""}`}
        onClick={toggleFullscreen}
        aria-pressed={isFullscreen}
        aria-label={isFullscreen ? "Salir de pantalla completa" : "Ver en pantalla completa"}
        title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
      >
        {isFullscreen ? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 4v3a2 2 0 0 1-2 2H4M20 9h-3a2 2 0 0 1-2-2V4M4 15h3a2 2 0 0 1 2 2v3M15 20v-3a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 9V6a2 2 0 0 1 2-2h3M20 9V6a2 2 0 0 0-2-2h-3M4 15v3a2 2 0 0 0 2 2h3M20 15v3a2 2 0 0 1-2 2h-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <button
        type="button"
        className={`fc-button${autoScrolling ? " fc-active" : ""}`}
        onClick={toggleAutoScroll}
        aria-pressed={autoScrolling}
        aria-label={autoScrolling ? "Detener auto-scroll" : "Activar auto-scroll"}
        title={autoScrolling ? "Detener auto-scroll" : "Auto-scroll"}
      >
        {autoScrolling ? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M7 4.5v15l13-7.5-13-7.5Z" />
          </svg>
        )}
      </button>

      <button
        type="button"
        className={`fc-button${musicEnabled ? " fc-active" : ""}`}
        onClick={toggleMusic}
        aria-pressed={musicEnabled}
        aria-label={musicEnabled ? "Silenciar música de fondo" : "Reproducir música de fondo"}
        title={musicEnabled ? "Silenciar música" : "Música de fondo"}
      >
        {musicEnabled ? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 9v6h4l5 4V5L8 9H4Z" strokeLinejoin="round" />
            <path d="M16.5 9a4.5 4.5 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 9v6h4l5 4V5L8 9H4Z" strokeLinejoin="round" />
            <path d="M16 8l5 8M21 8l-5 8" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
