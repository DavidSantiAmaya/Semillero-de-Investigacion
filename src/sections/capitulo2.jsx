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
          src="/images/ilustraciones/Ilustracion4Linea.webp"
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src="/images/ilustraciones/Ilustracion4Color.webp"
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
          La noche del 24 de julio de 1819 cayó sobre los campamentos con un silencio engañoso. Mientras los soldados descansaban, Simón Bolívar preparaba una maniobra decisiva: cruzar el río Chicamocha antes del amanecer utilizando las pocas balsas reunidas por los habitantes de la región. Su objetivo era sorprender al coronel José María Barreiro y obligarlo a combatir en condiciones desfavorables.
        </p>
        <div className="img-merge">
          <img
            className="line-img"
            src="/images/ilustraciones/Ilustracion5Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion5Color.webp"
            alt="Ilustracion color"
          />
        </div>

        <p className="story-text">
          Al mismo tiempo, Barreiro seguía de cerca los movimientos patriotas. La tradición oral de Paipa sostiene que durante esos días utilizó la Casa de las Seis Ventanas como alojamiento o cuartel temporal. Aunque esta versión forma parte de la memoria histórica de la región y no está confirmada por los partes militares, continúa siendo uno de los relatos más representativos del patrimonio local.
        </p>
      </div>
  )
}

export default Lucia