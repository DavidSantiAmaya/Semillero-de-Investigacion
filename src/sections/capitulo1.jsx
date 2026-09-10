import { useRef } from "react";
import { getAssetPath } from '../utils/assetPath';
import { useIllustrationParallax } from "../hooks/useIllustrationParallax";
import { navigateToContent } from "../utils/contentNavigation";
import { useNavigate } from "react-router-dom";

const Jason = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  useIllustrationParallax(sectionRef);

  const irAHero1 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 2,
      direction: 1,
    });
  };

   const irAHero2 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 8,
      direction: 1,
    });
  };

  const irAHistoria1 = () => {
    navigateToContent(navigate, {
      to: "/historia",
      id: "campana-libertadora",
      direction: 1,
    });
  };

  const irAHistoria2 = () => {
    navigateToContent(navigate, {
      to: "/historia",
      id: "batalla-gameza-topaga",
      direction: 1,
    });
  };


  const irAPersonaje1 = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "bolivar",
      direction: 1,
    });
  };

  const irAPersonaje2 = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "santander",
      direction: 1,
    });
  };

  const irAHero3 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 3,
      direction: 1,
    });
  };

  const irAHero4 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 1,
      direction: 1,
    });
  };

  const irAHero5 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 5,
      direction: 1,
    });
  };

const irAHistoria3 = () => {
    navigateToContent(navigate, {
      to: "/historia",
      id: "paramo-pisba",
      direction: 1,
    });
  };

  return (
    <section className="jason" ref={sectionRef}>
      <div className="img-box">
        <div className="img-merge">
          <img
            className="line-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion1Linea.webp")}
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion1Color.webp")}
            alt="Ilustracion color"
          />

        </div>
        <div className="button-row">
          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHero1}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsLugares/boyaca-background.webp")} 
              />
            </span>
            <span className="floating-button-label">Boyacá (1819)</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHero2}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsLugares/pantano-de-vargas-background.webp")}
              />
            </span>
            <span className="floating-button-label">Pantano de Vargas</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHistoria1}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsHistoria/campana-libertadora.webp")}
              />
            </span>
            <span className="floating-button-label">campaña libertadora</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHistoria2}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsHistoria/batalla-gameza.webp")}
              />
            </span>
            <span className="floating-button-label">Batalla de Gameza y Topaga</span>
          </button>
        </div>

        <p className="story-text">
          En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas, vino a agotarse parte de la fatiga de la campaña libertadora. Tras los combates de Gámeza y Tópaga, las columnas patriotas avanzaron exhaustas: hombres helados, con los uniformes hechos jirones, muchos descalzos, pero firmes en su decisión de seguir adelante. No marchaban únicamente contra el enemigo, también luchaban contra el cansancio, el hambre y el rigor del clima. Estas montañas no son un simple paisaje; son testigos del desgaste que precedió a la Batalla del Pantano de Vargas.
        </p>

        <div className="img-merge">
          <img
            className="line-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion2Linea.webp")}
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion2Color.webp")}
            alt="Ilustracion color"
          />
        </div>

        <div className="button-row">
          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAPersonaje1}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsPersonajes/bolivar/card1.webp")}
              />
            </span>
            <span className="floating-button-label">Simón Bolívar</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAPersonaje2}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsPersonajes/santander/card1.webp")}
              />
            </span>
            <span className="floating-button-label">Francisco de Paula Santander</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHero3}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsLugares/pisba-background.webp")}
              />
            </span>
            <span className="floating-button-label">Paramo de Pisba</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHero4}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsLugares/paipa-background.webp")}
              />
            </span>
            <span className="floating-button-label">Paipa</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHero5}
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsLugares/chicamocha-background.webp")}
              />
            </span>
            <span className="floating-button-label">Chicamocha</span>
          </button>

          <button
            type="button"
            className="floating-button circle-button"
            onClick={irAHistoria3}
            aria-label="Leer la historia de la batalla de Gámeza"
            title="Batalla de Gámeza"
          >
            <span className="floating-button-icon">
              <img
                src={getAssetPath("AssetsHistoria/paramo-pisba.webp")}
                alt=""
              />
            </span>
            <span className="floating-button-label">Cruze del pantado de pisba</span>
          </button>
        </div>

        <p className="story-text">
          Después del duro cruce del páramo de Pisba y de los primeros enfrentamientos de la campaña, Simón Bolívar y Francisco de Paula Santander organizaron sus fuerzas mientras avanzaban hacia el valle de Paipa. Cada marcha y cada breve descanso eran calculados con cuidado, conscientes de que el estado del ejército podía decidir el rumbo de la campaña. Su propósito era mantener la iniciativa y evitar que el Ejército Realista. Para lograrlo, pensaban utilizar balsas para cruzar el río Chicamocha con balsas improvisadas.
        </p>
      </div>
    </section>
  );
};
export default Jason;




