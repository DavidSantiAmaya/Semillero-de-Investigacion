import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Titulo2 = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const initialMaskSize = "5000%"; // Máscara abierta (se ve todo)
  const finalMaskSize = "80%";   // Máscara cerrada (marco de cine)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Configuración inicial
      gsap.set(".mask-wrapper2", {
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "50% 50%",
        maskPosition: "50% 50%",
        WebkitMaskSize: initialMaskSize,
        maskSize: initialMaskSize,
      });

      // 2. Timeline principal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=400%", // Más largo para que dé tiempo a ver la imagen
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".content-inside", {
        // Movemos todo el contenido hacia arriba
        // -50% para que recorra la imagen larga y el texto
        yPercent: -50, 
        ease: "none",
        duration: 2
      })
      .to(".mask-wrapper2", {
        // Una vez que terminó de moverse el contenido, la máscara se cierra
        WebkitMaskSize: finalMaskSize,
        maskSize: finalMaskSize,
        duration: 1,
        ease: "power2.inOut"
      })
      .to(".story-text-2", {
        // El texto desaparece al final si lo deseas
        opacity: 0,
        duration: 0.5
      }, "-=0.5"); // Empieza un poco antes de que termine la máscara

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #ffffff;
        }

        .mask-wrapper2 {
          width: 100%;
          height: 100%;
          position: relative;
          background: #ffffff;
        }

        .content-inside {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          /* Aquí permitimos que el contenido sea más alto que la pantalla */
          padding-top: 20vh; 
        }

        .img-merge {
          width: 100vw; /* Ancho total de pantalla */
          aspect-ratio: 16 / 9; /* Proporción 1920x1080 */
          position: relative;
          margin-bottom: 50px;
        }

        .img-merge img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%; /* Un poco más alta para efecto parallax interno */
          object-fit: cover;
          display: block;
        }

        .line-img { z-index: 10; }
        .color-img { z-index: 20; opacity: 0.7; }

        .story-text-2 {
          max-width: 800px;
          width: 86%;
          color: #1f1f1f;
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.8;
          font-family: Georgia, serif;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .story-text-2 { font-size: 1.1rem; }
        }
      `}</style>

      <div className="mask-wrapper2">
        <div ref={contentRef} className="content-inside">
          <div className="img-merge">
            <img
              className="line-img"
              src="/images/ilustraciones/Ilustracion3Linea.webp"
              alt="línea"
            />
            <img
              className="color-img"
              src="/images/ilustraciones/Ilustracion3Color.webp"
              alt="color"
            />
          </div>

          <p className="story-text-2">
            El ejército español comprobó que no se trataba solo de hombres agotados, sino de tropas capaces de rehacerse bajo el fuego. Esa tenacidad, sumada a la ayuda de campesinos que llevaron ropas y vituallas, permitió recomponer las filas patriotas. Con lo puesto y la moral a duras penas sostenida, la tropa marchó hacia Paipa no a celebrar, sino a reorganizarse y prepararse para el próximo choque con las fuerzas españolas.
          </p>
          
          {/* Puedes agregar más contenido aquí abajo para hacerlo más "largo" */}
        </div>
      </div>
    </section>
  );
};

export default Titulo2;