import { useEffect, useState } from "react";
import { getAssetPath } from "../utils/assetPath";
import "./Loader.css";

// Tiempo mínimo que se muestra la pantalla de carga, sin importar qué tan
// rápido terminen de cargar los recursos (imágenes, hojas de estilo, etc.).
const MIN_DISPLAY_MS = 5000;
const FADE_MS = 500;

function useAppReady() {
  const [windowLoaded, setWindowLoaded] = useState(
    () => document.readyState === "complete"
  );
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    if (windowLoaded) return undefined;
    const onLoad = () => setWindowLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [windowLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return windowLoaded && minTimeElapsed;
}

export default function Loader() {
  const ready = useAppReady();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!ready) return undefined;
    setFading(true);
    const timer = setTimeout(() => setVisible(false), FADE_MS);
    return () => clearTimeout(timer);
  }, [ready]);

  // Bloquea el scroll/interacción con la página mientras se muestra la carga.
  useEffect(() => {
    if (!visible) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`app-loader${fading ? " app-loader-hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!ready}
    >
      <div className="app-loader-content">
        <span className="app-loader-eyebrow">Semillero de Investigación</span>
        <img
          className="app-loader-gif"
          src={getAssetPath("/images/loading.gif")}
          alt=""
          aria-hidden="true"
        />
        <p className="app-loader-text">Cargando la experiencia…</p>
      </div>
    </div>
  );
}
