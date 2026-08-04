import gsap from "gsap";
import { getAssetPath } from '../utils/assetPath';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigateToContent } from "../utils/contentNavigation";

const Lucia = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const sections = gsap.utils.toArray(".img-merge")

    sections.forEach((section) => {
      const line = section.querySelector(".line-img")
      const color = section.querySelector(".color-img")

      gsap.to(line, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.6,
        },
        y: -60,
        ease: "none",
      })

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
      )
    })
  })

   const irAHero1 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 4,
      direction: 1,
    });
  };

    const irAHero2 = () => {
    navigateToContent(navigate, {
      to: "/lugares",
      id: 6,
      direction: 1,
    });
  };


  const irAPersonaje = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "amaya",
      direction: 1,
    });
  };


  return (
    <div className="img-box">
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion17Linea.webp")}
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion17Color.webp")}
          alt="Ilustracion color"
        />
      </div>

        <p className="story-text">
          Hacia el final de la tarde, la resistencia del Ejército Realista comenzó a ceder. La presión ejercida por las fuerzas patriotas obligó a Barreiro a ordenar la retirada, poniendo fin a una de las batallas más intensas de la Campaña Libertadora. El campo quedó cubierto por soldados muertos y heridos de ambos bandos, evidencia del alto costo que había tenido la victoria.
        </p>

        <div className="img-merge">
          <img
            className="line-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion19Linea.webp")}
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion19Color.webp")}
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
              src={getAssetPath("/images/Botones/boton-personajes.webp")}
            />
          </span>
          <span className="floating-button-label">Simona Amaya</span>
        </button>

        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAHero1}
        >
          <span className="floating-button-icon">
            <img
              src={getAssetPath("/images/Botones/boton-lugares.webp")}
            />
          </span>
          <span className="floating-button-label">Paya</span>
        </button>
      </div>

        <p className="story-text">
          Mientras cesaban los disparos, los sobrevivientes iniciaron la difícil tarea de atender a los heridos, recoger a los caídos y reorganizar las unidades dispersas por el combate. Entre quienes acompañaban al Ejército Libertador se encontraba Simona Amaya, una joven nacida en Paya que, según la tradición histórica, se disfrazó de hombre para incorporarse a las tropas patriotas y participar en la campaña. Diversas fuentes señalan que perdió la vida durante los acontecimientos del 25 de julio de 1819, convirtiéndose en una de las mujeres recordadas como heroína y mártir de la independencia.
        </p>
      
        <div className="img-merge">
          <img
            className="line-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion18Linea.webp")}
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src={getAssetPath("/images/ilustraciones/Ilustracion18Color.webp")}
            alt="Ilustracion color"
          />
        </div>

        <div className="button-row">
        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAHero2}
        >
          <span className="floating-button-icon">
            <img
              src={getAssetPath("/images/Botones/boton-lugares.webp")}
            />
          </span>
          <span className="floating-button-label">Parque Jaime Rooke</span>
        </button>
      </div>

        <p className="story-text">
          Aunque el Pantano de Vargas representó un triunfo decisivo para los patriotas, la guerra todavía no había concluido. Barreiro conservaba parte de sus fuerzas y buscó reorganizarlas para impedir el avance del Ejército Libertador hacia el centro del virreinato.
        </p>
      </div>
  )
}

export default Lucia



