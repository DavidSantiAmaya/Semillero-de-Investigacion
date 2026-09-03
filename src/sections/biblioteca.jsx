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
            id: 1,
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

    const irAPersonaje1 = () => {
        navigateToContent(navigate, {
            to: "/personajes",
            id: "bolivar",
            direction: 1,
        });
    };

    return (
                <div className="button-row">
                    <button
                        type="button"
                        className="floating-button circle-button"
                        onClick={irAHero1}
                    >
                        <span className="floating-button-icon">
                            <img
                                src={getAssetPath("public/images/Botones/boton-lugares.webp")}
                            />
                        </span>
                        <span className="floating-button-label">Biblioteca De Lugares</span>
                    </button>

                    <button
                        type="button"
                        className="floating-button circle-button"
                        onClick={irAHistoria1}
                    >
                        <span className="floating-button-icon">
                            <img
                                src={getAssetPath("public/images/Botones/boton-historia.webp")}
                            />
                        </span>
                        <span className="floating-button-label">Biblioteca De Historia</span>
                    </button>

                    <button
                        type="button"
                        className="floating-button circle-button"
                        onClick={irAPersonaje1}
                    >
                        <span className="floating-button-icon">
                            <img
                                src={getAssetPath("public/images/Botones/boton-personajes.webp")}
                            />
                        </span>
                        <span className="floating-button-label">Biblioteca De Personajes</span>
                    </button>
                </div>
    );
};
export default Jason;