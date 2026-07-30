import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { navigateToContent } from "../utils/contentNavigation";

gsap.registerPlugin(ScrollTrigger);

const Jason = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const sections = gsap.utils.toArray(".img-merge");

    sections.forEach((section) => {
      const line = section.querySelector(".line-img");
      const color = section.querySelector(".color-img");

      if (!line || !color) return;

      gsap.to(line, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.6,
        },
        y: -60,
        ease: "none",
      });

      gsap.fromTo(
        color,
        { y: 40 },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2,
          },
          y: -110,
          ease: "none",
        }
      );
    });
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
  <section className="jason" ref={sectionRef}>
    <div className="img-box">
      <div className="img-merge">
        <img
          className="line-img"
          src="/images/ilustraciones/Ilustracion1Linea.webp"
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src="/images/ilustraciones/Ilustracion1Color.webp"
          alt="Ilustracion color"
        />

      </div>
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
              src="/images/Botones/boton_de_irLugar.webp"
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

      <p className="story-text">
        En estas tierras de Boyacá, marcadas por el frío y el silencio de las
        montañas, vino a agotarse parte de la fatiga de la campaña
        libertadora. Tras los combates de Gámeza y Tópaga, las columnas
        patriotas avanzaron exhaustas: hombres helados, con los uniformes
        hechos jirones, algunos descalzos, pero firmes en su decisión de
        seguir adelante.
      </p>

      <div className="img-merge">
        <img
          className="line-img"
          src="/images/ilustraciones/Ilustracion2Linea.webp"
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src="/images/ilustraciones/Ilustracion2Color.webp"
          alt="Ilustracion color"
        />
      </div>

      <p className="story-text">
        Días antes de llegar a Paipa, en medio de estas tierras frías de
        Boyacá, Simón Bolívar y Francisco de Paula Santander se detuvieron a
        reorganizar lo poco que quedaba en pie.
      </p>
    </div>
  </section>
);
};
export default Jason;
