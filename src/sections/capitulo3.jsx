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
      id: 8,
      direction: 1,
    });
  };

  const irAPersonaje1 = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "anzoategui",
      direction: 1,
    });
  };

  const irAPersonaje2 = () => {
    navigateToContent(navigate, {
      to: "/personajes",
      id: "rooke",
      direction: 1,
    });
  };

  return (
    <div className="img-box">
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion7Linea.webp")}
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion7Color.webp")}
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
              src={getAssetPath("/images/Botones/boton-lugares.webp")}
            />
          </span>
          <span className="floating-button-label">Picacho y Cangrejo</span>
        </button>
      </div>

      <p className="story-text">
        En la mañana del 25 de julio de 1819, los ejércitos patriota y realista se encontraron frente a frente en el Pantano de Vargas. Las tropas españolas ocupaban las alturas de El Picacho y El Cangrejo, desde donde dominaban el valle y podían observar cada movimiento enemigo. Ante esta desventaja, Simón Bolívar organizó el ataque y dispuso el avance de su ejército para intentar arrebatar a los realistas el control del terreno.
      </p>
      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion8Linea.webp")}
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion8Color.webp")}
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
              src={getAssetPath("/images/Botones/boton-lugares.webp")}
            />
          </span>
          <span className="floating-button-label">Picacho y Cangrejo</span>
        </button>
      </div>

      <p className="story-text">
        El primer impulso ofensivo quedó a cargo de la infantería patriota. Francisco de Paula Santander condujo una de las columnas, mientras el comandante José Antonio Anzoátegui dirigía la otra junto al Batallón Rifles. El ascenso por las laderas fue lento y agotador, pues los batallones Rifles, Barcelona y Cazadores avanzaban bajo un intenso fuego enemigo. La posición elevada de los realistas les permitió rechazar una y otra vez los intentos patriotas por alcanzar la cima.
</p>

      <div className="img-merge">
        <img
          className="line-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion9Linea.webp")}
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src={getAssetPath("/images/ilustraciones/Ilustracion9Color.webp")}
          alt="Ilustracion color"
        />
      </div>

      <p className="story-text">Mientras la infantería combatía en las pendientes, Jaime Rooke, al mando de la Legión Británica, permanecía en reserva junto con la caballería, esperando la orden de intervenir. A medida que transcurrían las horas, el humo de la pólvora cubría el campo de batalla y el cansancio comenzaba a afectar a ambos bandos. Cada avance exigía un enorme sacrificio y el enfrentamiento se transformó en una dura prueba de resistencia.
</p>
    </div>
  )
}

export default Lucia



