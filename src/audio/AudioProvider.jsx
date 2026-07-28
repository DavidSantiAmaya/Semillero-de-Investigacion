import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const AudioContext = createContext(null);

// Colócalos en /public/audio con estos nombres exactos (o cambia las rutas aquí).
const DEFAULT_TRACK = "/audio/ambiente.mp3";
const RAIN_TRACK = "/audio/lluvia.mp3";

// La lluvia suena mientras el usuario está entre el inicio de capitulo4 y el
// final de capitulo6; fuera de ese rango suena la pista "ambiente" normal.
const RAIN_START_ID = "capitulo4";
const RAIN_END_ID = "capitulo6";

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const currentTrackRef = useRef(DEFAULT_TRACK);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "none";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const setTrack = useCallback((src) => {
    if (currentTrackRef.current === src) return;
    currentTrackRef.current = src;
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = !audio.paused;
    audio.src = src;
    if (wasPlaying) {
      audio.play().catch(() => {});
    }
  }, []);

  // Detecta en qué tramo de la página está el usuario para elegir la pista.
  useEffect(() => {
    let ticking = false;

    const check = () => {
      ticking = false;
      const start = document.getElementById(RAIN_START_ID);
      const end = document.getElementById(RAIN_END_ID);
      if (!start || !end) return;

      const startTop = start.getBoundingClientRect().top + window.scrollY;
      const endBottom = end.getBoundingClientRect().bottom + window.scrollY;
      const middle = window.scrollY + window.innerHeight / 2;

      setTrack(middle >= startTop && middle <= endBottom ? RAIN_TRACK : DEFAULT_TRACK);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [setTrack]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      const audio = audioRef.current;
      if (audio) {
        if (next) {
          if (!audio.src) audio.src = currentTrackRef.current;
          audio.play().catch(() => {});
        } else {
          audio.pause();
        }
      }
      return next;
    });
  }, []);

  return (
    <AudioContext.Provider value={{ enabled, toggle }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useBackgroundAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useBackgroundAudio debe usarse dentro de <AudioProvider>");
  }
  return ctx;
}
