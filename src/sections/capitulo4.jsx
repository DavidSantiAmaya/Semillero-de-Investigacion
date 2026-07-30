import gsap from "gsap";
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
    <div className="img-box">
      <div className="img-merge">
        <img
          className="line-img"
          src="/images/ilustraciones/Ilustracion11Linea.webp"
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src="/images/ilustraciones/Ilustracion11Color.webp"
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

        <p className="story-text">
            Con el paso de las horas, la iniciativa parecía favorecer al Ejército Realista. Desde las alturas, las tropas de José María Barreiro mantenían la presión sobre los patriotas, que continuaban atacando sin lograr romper la línea defensiva. Algunos relatos históricos atribuyen a Barreiro la expresión: «¡Viva España, ni Dios me quita la victoria!», una frase que forma parte de la tradición de la batalla, aunque no aparece registrada en los partes militares conocidos.
        </p>
        <div className="img-merge">
          <img
            className="line-img"
            src="/images/ilustraciones/Ilustracion12Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion12Color.webp"
            alt="Ilustracion color"
          />
        </div>

        <p className="story-text">
          Diversas investigaciones también mencionan que, durante la tarde, las condiciones del clima dificultaron el combate. La humedad y la lluvia afectaron el uso de la pólvora y redujeron la eficacia del fuego de fusilería, obligando a muchos soldados a enfrentarse a corta distancia con bayonetas, lanzas y culatas de fusil. El terreno, ya convertido en barro, hacía cada movimiento más lento y peligroso.
        </p>
      </div>
  )
}

export default Lucia