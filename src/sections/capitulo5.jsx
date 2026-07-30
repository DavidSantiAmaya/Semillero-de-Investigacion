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
          src="/images/ilustraciones/Ilustracion14Linea.webp"
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src="/images/ilustraciones/Ilustracion14Color.webp"
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
          Al observar que los ataques de infantería no conseguían romper las posiciones enemigas, Bolívar tomó una decisión arriesgada. La tradición histórica atribuye a ese momento la célebre orden: «¡Coronel Rondón, salve usted la patria!». José Antonio Rondón respondió encabezando la carga de los lanceros llaneros desde el sector de Barital. Aunque la memoria popular recuerda a los catorce primeros lanceros que iniciaron la acometida, detrás de ellos avanzó el resto de la caballería patriota.
        </p>
        <div className="img-merge">
          <img
            className="line-img"
            src="/images/ilustraciones/Ilustracion15Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion15Color.webp"
            alt="Ilustracion color"
          />
        </div>

        <p className="story-text">La carga sorprendió a las fuerzas realistas y abrió el espacio que la infantería necesitaba para continuar el ataque. Al mismo tiempo, otras unidades, entre ellas la Legión Británica y las tropas dirigidas por Lucas Carvajal, presionaron desde diferentes sectores del campo de batalla, obligando a Barreiro a combatir en varios frentes de manera simultánea.</p>
      </div>
  )
}

export default Lucia