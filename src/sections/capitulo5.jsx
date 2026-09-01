import { getAssetPath } from "../utils/assetPath";
import { useIllustrationParallax } from "../hooks/useIllustrationParallax";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToContent } from "../utils/contentNavigation";
import { useBackgroundAudio } from "../audio/AudioProvider";

// Tema de Juan José Rondón
const RONDON_TRACK = encodeURI(
  getAssetPath("/audio/Coronel Rondón.mp3")
);

const RONDON_FADE_MS = 1200;
const RONDON_VOLUME = 0.55;

function useRondonTheme(paragraphRef) {
  const { enabled } = useBackgroundAudio();

  const audioRef = useRef(null);
  const fadeFrameRef = useRef(null);

  // Crear audio
  useEffect(() => {
    const audio = new Audio(RONDON_TRACK);

    audio.loop = true;
    audio.volume = 0;

    audioRef.current = audio;

    return () => {
      cancelAnimationFrame(fadeFrameRef.current);

      audio.pause();
      audio.currentTime = 0;

      audioRef.current = null;
    };
  }, []);

  // Fundido de volumen
  const fadeTo = useCallback((target, onDone) => {
    const audio = audioRef.current;

    if (!audio) return;

    cancelAnimationFrame(fadeFrameRef.current);

    const start = audio.volume;
    const startTime = performance.now();

    const step = (now) => {
      const t = Math.min(
        1,
        (now - startTime) / RONDON_FADE_MS
      );

      audio.volume = start + (target - start) * t;

      if (t < 1) {
        fadeFrameRef.current =
          requestAnimationFrame(step);
      } else if (onDone) {
        onDone();
      }
    };

    fadeFrameRef.current =
      requestAnimationFrame(step);
  }, []);

  // Activar audio cuando el párrafo está en el centro
  useEffect(() => {
    const el = paragraphRef.current;
    const audio = audioRef.current;

    if (!el || !audio) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && enabled) {
          audio.play().catch(() => {});
          fadeTo(RONDON_VOLUME);
        } else {
          fadeTo(0, () => {
            audio.pause();
          });
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [paragraphRef, enabled, fadeTo]);
}

const Lucia = () => {
  const sectionRef = useRef(null);
  const rondonRef = useRef(null);

  const navigate = useNavigate();

  // Audio de Rondón
  useRondonTheme(rondonRef);

  useIllustrationParallax(sectionRef);

  const irAPersonajes = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "rondon",
      direction: 1,
    });
  };

  return (
    <div
      className="img-box"
      ref={sectionRef}
    >
      {/* ILUSTRACIÓN 14 */}
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion14Linea.webp"
          )}
          alt="Ilustración línea"
        />

        <img
          className="color-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion14Color.webp"
          )}
          alt="Ilustración color"
        />
      </div>

      {/* BOTÓN RONDÓN */}
      <div className="button-row">
        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAPersonajes}
          aria-label="Ver el perfil de Juan José Rondón"
          title="Juan José Rondón"
        >
          <span className="floating-button-icon">
            <img
              src={getAssetPath(
                "public/AssetsPersonajes/rondon/card1.webp"
              )}
              alt=""
            />
          </span>

          <span className="floating-button-label">
            Juan José Rondón
          </span>
        </button>
      </div>

      {/* PÁRRAFO QUE ACTIVA LA MÚSICA */}
      <p
        className="story-text"
        ref={rondonRef}
      >
        Al observar que los ataques de infantería no
        conseguían romper las posiciones enemigas,
        Bolívar tomó una decisión arriesgada. La
        tradición histórica atribuye a ese momento la
        célebre orden: «¡Coronel Rondón, salve usted la
        patria!». José Antonio Rondón respondió
        encabezando la carga de los lanceros llaneros
        desde el sector de Barital. Aunque la memoria
        popular recuerda a los catorce primeros
        lanceros que iniciaron la acometida, detrás de
        ellos avanzó el resto de la caballería patriota.
      </p>

      {/* ILUSTRACIÓN 15 */}
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion15Linea.webp"
          )}
          alt="Ilustración línea"
        />

        <img
          className="color-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion15Color.webp"
          )}
          alt="Ilustración color"
        />
      </div>

      <p className="story-text">
        La carga sorprendió a las fuerzas realistas y
        abrió el espacio que la infantería necesitaba
        para continuar el ataque. Al mismo tiempo,
        otras unidades, entre ellas la Legión Británica
        y las tropas dirigidas por Lucas Carvajal,
        presionaron desde diferentes sectores del campo
        de batalla, obligando a Barreiro a combatir en
        varios frentes de manera simultánea.
      </p>
    </div>
  );
};

export default Lucia;
