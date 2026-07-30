import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { navigateToContent } from "../utils/contentNavigation";
import { useNavigate } from "react-router-dom";

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

        <p className="story-text">
          En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas, vino a agotarse parte de la fatiga de la campaña libertadora. Tras los combates de Gámeza y Tópaga, las columnas patriotas avanzaron exhaustas: hombres helados, con los uniformes hechos jirones, muchos descalzos, pero firmes en su decisión de seguir adelante. No marchaban únicamente contra el enemigo, también luchaban contra el cansancio, el hambre y el rigor del clima. Estas montañas no son un simple paisaje; son testigos del desgaste que precedió a la Batalla del Pantano de Vargas.
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
          Después del duro cruce del páramo de Pisba y de los primeros enfrentamientos de la campaña, Simón Bolívar y Francisco de Paula Santander organizaron sus fuerzas mientras avanzaban hacia el valle de Paipa. Cada marcha y cada breve descanso eran calculados con cuidado, conscientes de que el estado del ejército podía decidir el rumbo de la campaña. Su propósito era mantener la iniciativa y evitar que el Ejército Realista. Para lograrlo, pensaban utilizar balsas para cruzar el río Chicamocha con balsas improvisadas.
        </p>
      </div>
    </section>
  );
};
export default Jason;
