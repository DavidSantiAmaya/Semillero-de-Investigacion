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
      gsap.set(".mask-wrapper6", {
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
        .to(".mask-wrapper6", {
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
      id: 1,
      direction: 1,
    });
  };

  const irAHistoria = () => {
    navigateToContent(navigate, {
      to: "/historia",
      id: "batalla-gameza",
      direction: 1,
    });
  };

  const irAPersonajesbolivar = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "bolivar",
      direction: 1,
    });
  };

  const irAPersonajessantander = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "santander",
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

        .mask-wrapper6 {
          width: 100%;
          height: 100%;
          position: relative;
          background: #ffffff;
        }
       
      `}</style>
      <div className="mask-wrapper6">
        <div className="content-inside">
          <div className="img-merge">
            <img
              className="line-img"
              src="/images/ilustraciones/Ilustracion16Linea.webp"
              alt="línea"
            />
            <img
              className="color-img"
              src="/images/ilustraciones/Ilustracion16Color.webp"
              alt="color"
            />
          </div>

          <p className="story-text">
            El resultado fue un cambio progresivo en el desarrollo del combate. La victoria patriota no fue consecuencia de una sola carga heroica, sino de la combinación entre la decisión de Bolívar, la ofensiva de los lanceros, el avance coordinado de la infantería y el desgaste que ambos ejércitos habían sufrido durante toda la jornada.
          </p>

          <div className="button-row">
            <button
              type="button"
              className="floating-button circle-button"
              onClick={irAPersonajesbolivar}
              aria-label="Ver el perfil de Simón Bolívar"
              title="Simón Bolívar"
            >
              <span className="floating-button-icon">
                <img
                  src="/images/Botones/boton-personajes.webp"
                  alt=""
                />
              </span>
              <span className="floating-button-label">Simón Bolívar</span>
            </button>

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
              <span className="floating-button-label">Explorar el lugar</span>
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
              <span className="floating-button-label">Batalla de Gámeza</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Titulo2;
