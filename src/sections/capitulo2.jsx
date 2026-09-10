import { getAssetPath } from "../utils/assetPath";
import { useIllustrationParallax } from "../hooks/useIllustrationParallax";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToContent } from "../utils/contentNavigation";

const Lucia = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useIllustrationParallax(sectionRef);

  const irAHero = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 7,
      direction: 1,
    });
  };

  const irAPersonaje = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "barreiro",
      direction: 1,
    });
  };

  return (
    <div className="img-box" ref={sectionRef}>
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion4Linea.webp"
          )}
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion4Color.webp"
          )}
          alt="Ilustracion color"
        />
      </div>

      <p className="story-text">
        La noche del 24 de julio de 1819 cayó sobre los campamentos con un
        silencio engañoso. Mientras los soldados descansaban, Simón Bolívar
        preparaba una maniobra decisiva: cruzar el río Chicamocha antes del
        amanecer utilizando las pocas balsas reunidas por los habitantes de
        la región. Su objetivo era sorprender al coronel José María Barreiro y
        obligarlo a combatir en condiciones desfavorables.
      </p>

      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion5Linea.webp"
          )}
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion5Color.webp"
          )}
          alt="Ilustracion color"
        />
      </div>

      <div className="button-row">
        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAPersonaje}
        >
          <span className="floating-button-icon">
            <img
              src={getAssetPath(
                "AssetsPersonajes/barreiro/card1.webp"
              )}
              alt=""
            />
          </span>
          <span className="floating-button-label">
            José María Barreiro
          </span>
        </button>

        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAHero}
        >
          <span className="floating-button-icon">
            <img
              src={getAssetPath(
                "AssetsLugares/casa-seis-ventanas-background.webp"
              )}
              alt=""
            />
          </span>
          <span className="floating-button-label">
            Casa de las Seis Ventanas
          </span>
        </button>
      </div>

      <p className="story-text">
        Al mismo tiempo, Barreiro seguía de cerca los movimientos patriotas.
        La tradición oral de Paipa sostiene que durante esos días utilizó la
        Casa de las Seis Ventanas como alojamiento o cuartel temporal. Aunque
        esta versión forma parte de la memoria histórica de la región y no
        está confirmada por los partes militares, continúa siendo uno de los
        relatos más representativos del patrimonio local.
      </p>
    </div>
  );
};
export default Lucia;