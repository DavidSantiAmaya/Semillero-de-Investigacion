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

        <div className="button-row">
        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAPersonaje}
        >
          <span className="floating-button-icon">
            <img
            />
          </span>
          <span className="floating-button-label">José María Barreiro</span>
        </button>

        <button
          type="button"
          className="floating-button circle-button"
          onClick={irAHero}
        >
          <span className="floating-button-icon">
            <img
              src="/images/Botones/boton-lugares.webp"
            />
          </span>
          <span className="floating-button-label">Casa de las Seis Ventanas</span>
        </button>

      </div>

        <p className="story-text">
          Al mismo tiempo, Barreiro seguía de cerca los movimientos patriotas. La tradición oral de Paipa sostiene que durante esos días utilizó la Casa de las Seis Ventanas como alojamiento o cuartel temporal. Aunque esta versión forma parte de la memoria histórica de la región y no está confirmada por los partes militares, continúa siendo uno de los relatos más representativos del patrimonio local.
        </p>
      </div>
  )
}

export default Lucia