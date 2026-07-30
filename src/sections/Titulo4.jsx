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
      gsap.set(".mask-wrapper4", {
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
        .to(".mask-wrapper4", {
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

        .mask-wrapper4 {
          width: 100%;
          height: 100%;
          position: relative;
          background: #ffffff;
        }
       
      `}</style>
      <div className="mask-wrapper4">
        <div className="content-inside">
          <div className="img-merge">
            <img
              className="line-img"
              src="/images/ilustraciones/Ilustracion10Linea.webp"
              alt="línea"
            />
            <img
              className="color-img"
              src="/images/ilustraciones/Ilustracion10Color.webp"
              alt="color"
            />
          </div>

          <p className="story-text">
            Durante horas el combate se convirtió en una prueba de resistencia. El humo de la pólvora, el cansancio acumulado y las continuas bajas comenzaron a afectar a ambos bandos. Ninguno conseguía imponerse con claridad, y la batalla parecía avanzar hacia un desgaste prolongado en el que cada metro conquistado tenía un alto costo humano.
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
                className="line-img"
                src="/images/Botones/boton_Personajes_Linea.webp"
                alt=""
              />
              <img
                className="color-img"
                src="/images/Botones/botones_Personajes_Color.webp"
                alt=""
              />
            </span>
            <span className="floating-button-label">Simón Bolívar</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAPersonajessantander}
            aria-label="Ver el perfil de Francisco de Paula Santander"
            title="Francisco de Paula Santander"
          >
            <span className="floating-button-icon">
              <img
                className="line-img"
                src="/images/Botones/boton_Personajes_Linea.webp"
                alt=""
              />
              <img
                className="color-img"
                src="/images/Botones/botones_Personajes_Color.webp"
                alt=""
              />
            </span>
            <span className="floating-button-label">Santander</span>
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
                className="color-img"
                src="/images/Botones/Boton_de_irLugar.webp"
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
                className="color-img"
                src="/images/Botones/botones_history.webp"
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
