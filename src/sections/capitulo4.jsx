import { getAssetPath } from "../utils/assetPath";
import { useIllustrationParallax } from "../hooks/useIllustrationParallax";
import { useRef } from "react";

const Lucia = () => {
  const sectionRef = useRef(null);

  useIllustrationParallax(sectionRef);

  return (
    <div className="img-box" ref={sectionRef}>
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion11Linea.webp"
          )}
          alt="Ilustración línea"
        />

        <img
          className="color-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion11Color.webp"
          )}
          alt="Ilustración color"
        />
      </div>

      <p className="story-text">
        Con el paso de las horas, la iniciativa parecía favorecer al
        Ejército Realista. Desde las alturas, las tropas de José María
        Barreiro mantenían la presión sobre los patriotas, que continuaban
        atacando sin lograr romper la línea defensiva. Algunos relatos
        históricos atribuyen a Barreiro la expresión: «¡Viva España, ni
        Dios me quita la victoria!», una frase que forma parte de la
        tradición de la batalla, aunque no aparece registrada en los
        partes militares conocidos.
      </p>

      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion12Linea.webp"
          )}
          alt="Ilustración línea"
        />

        <img
          className="color-img"
          src={getAssetPath(
            "/images/ilustraciones/Ilustracion12Color.webp"
          )}
          alt="Ilustración color"
        />
      </div>

      <p className="story-text">
        Diversas investigaciones también mencionan que, durante la tarde,
        las condiciones del clima dificultaron el combate. La humedad y
        la lluvia afectaron el uso de la pólvora y redujeron la eficacia
        del fuego de fusilería, obligando a muchos soldados a enfrentarse
        a corta distancia con bayonetas, lanzas y culatas de fusil. El
        terreno, ya convertido en barro, hacía cada movimiento más lento
        y peligroso.
      </p>
    </div>
  );
};

export default Lucia;