import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../utils/gsap";


const COLOR_START = 48;

const COLOR_END = -48;

export function useIllustrationParallax(scopeRef) {
  useGSAP(
    () => {
      const root = scopeRef.current;
      if (!root) return;

      const illustrations = root.querySelectorAll(".img-merge");

      illustrations.forEach((illustration) => {
        const line = illustration.querySelector(".line-img");
        const color = illustration.querySelector(".color-img");

        if (!line || !color) return;

        /*
         * --------------------------------------------------
         * LINE
         * --------------------------------------------------
         *
         * La línea permanece completamente quieta.
         */
        gsap.set(line, {
          y: 0,
        });

        /*
         * --------------------------------------------------
         * COLOR
         * --------------------------------------------------
         *
         * El color empieza debajo de la línea.
         */
        gsap.set(color, {
          y: COLOR_START,
        });

        /*
         * --------------------------------------------------
         * ANIMACIÓN
         * --------------------------------------------------
         *
         * COLOR:
         *
         *     empieza abajo
         *          ↓
         *          ↓
         *       ALINEADO
         *          ↓
         *          ↓
         *     termina arriba
         *
         * LINE:
         *
         *     siempre en y: 0
         */
        gsap.to(color, {
          y: COLOR_END,

          ease: "none",

          scrollTrigger: {
            trigger: illustration,

            // Cuando la ilustración comienza a entrar
            // desde la parte inferior.
            start: "top bottom",

            // Cuando termina de salir por arriba.
            end: "bottom top",

            // El movimiento sigue directamente al scroll.
            scrub: 0.6,

            // Recalcular posiciones cuando cambie el tamaño.
            invalidateOnRefresh: true,
          },
        });
      });

      /*
       * Las imágenes pueden cargar después y cambiar
       * el tamaño de sus contenedores.
       *
       * Actualizamos ScrollTrigger después del render.
       */
      const refreshFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        cancelAnimationFrame(refreshFrame);
      };
    },
    {
      scope: scopeRef,
    }
  );
}