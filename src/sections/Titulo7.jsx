import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { navigateToContent } from "../utils/contentNavigation";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Titulo2 = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Más grande al inicio para que no se vea la máscara al principio
  const initialMaskSize = "96000%";
  const finalMaskSize = "80%";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Configuración inicial
      gsap.set(".mask-wrapper7", {
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "50% 50%",
        maskPosition: "50% 50%",
        WebkitMaskSize: initialMaskSize,
        maskSize: initialMaskSize,
        backgroundColor: "#ffffff",
      });

      gsap.set(".content-inside", {
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to(".content-inside", {
        yPercent: -50,
        ease: "none",
        duration: 2,
      })
        .to(".mask-wrapper7", {
          backgroundColor: "#000000",
          WebkitMaskSize: finalMaskSize,
          maskSize: finalMaskSize,
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(
          ".content-inside",
          {
            opacity: 0,
            duration: 1.2,
            ease: "none",
          },
          "<"
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const irAHero = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 9,
      direction: 1,
    });
  };

  const irAHistoria = () => {
    navigateToContent(navigate, {
      to: "/historia",
      id: "batalla-de-puente-de-boyaca",
      direction: 1,
    });
  };


  return (
    <section ref={heroRef} className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }

        .mask-wrapper7 {
          width: 100%;
          height: 100%;
          position: relative;
          background: #ffffff;
        }
       
      `}</style>
      <div className="mask-wrapper7">
        <div className="content-inside">
          <div className="img-merge">
            <img
              className="line-img"
              src="/images/ilustraciones/Ilustracion20Linea.webp"
              alt="línea"
            />
            <img
              className="color-img"
              src="/images/ilustraciones/Ilustracion20Color.webp"
              alt="color"
            />
          </div>

<div className="button-row">
            
            <button
              type="button"
              className="floating-button circle-button"
              onClick={irAHero}
              aria-label="Explorar el lugar de los hechos"
              title="Explorar el lugar"
            >
              <span className="floating-button-icon">
                <img
                  src="/images/Botones/boton-lugares.webp"
                  alt=""
                />
              </span>
              <span className="floating-button-label">Puente de Boyacá</span>
            </button>

            <button
              type="button"
              className="floating-button circle-button"
              onClick={irAHistoria}
              aria-label="Leer la historia de la batalla de Gámeza"
              title="Batalla de Gámeza"
            >
              <span className="floating-button-icon">
                <img
                  src="/images/Botones/boton-historia.webp"
                  alt=""
                />
              </span>
              <span className="floating-button-label">Batalla del pueste Boyacá</span>
            </button>
          </div>

          <p className="story-text">
            Sin tiempo para una celebración prolongada, Bolívar reorganizó sus tropas y emprendió la marcha hacia Tunja. La victoria obtenida en el Pantano de Vargas permitió recuperar la iniciativa estratégica y abrió el camino hacia el enfrentamiento definitivo que, pocos días después, tendría lugar en el Puente de Boyacá.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Titulo2;
