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
          src="/images/ilustraciones/Ilustracion7Linea.webp"
          alt="Ilustracion linea"
        />
        <img
          className="color-img"
          src="/images/ilustraciones/Ilustracion7Color.webp"
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
          El campo de combate imponía sus propias reglas. Desde los cerros de El Picacho y El Cangrejo, los realistas dominaban el valle. Bolívar respondió dividiendo su infantería en dos columnas, dirigidas por Francisco de Paula Santander y Arthur Sandes, mientras mantenía en reserva la Legión Británica y la caballería. Todo estaba dispuesto para el enfrentamiento que definiría el destino de la Campaña Libertadora.
        </p>
        <div className="img-merge">
          <img
            className="line-img"
             src="/images/ilustraciones/Ilustracion8Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion8Color.webp"
            alt="Ilustracion color"
          />
        </div>

        <p className="story-text">
          La mañana del 25 de julio de 1819 encontró a ambos ejércitos frente a frente en el Pantano de Vargas. El Ejército Realista dominaba las alturas de El Picacho y El Cangrejo, desde donde podía observar cada movimiento de los patriotas. Consciente de la desventaja que imponía el terreno, Simón Bolívar ordenó el avance de la infantería en dos columnas: una por el flanco izquierdo bajo el mando de Francisco de Paula Santander y otra por el flanco derecho dirigida por el coronel Arthur Sandes y el Batallón Rifles. Mientras tanto, la Legión Británica y la caballería permanecían en reserva, listas para intervenir cuando la situación lo exigiera.
        </p>

        <div className="img-merge">
          <img
            className="line-img"
             src="/images/ilustraciones/Ilustracion9Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion9Color.webp"
            alt="Ilustracion color"
          />
        </div>

        <p className="story-text">
        El ascenso fue lento y agotador. Los batallones Rifles, Barcelona y Cazadores avanzaron por las pendientes bajo un intenso fuego realista. Cada intento por alcanzar la cima encontraba una fuerte resistencia, obligando a los patriotas a retroceder y reorganizarse una y otra vez. La ventaja de la altura permitía a los realistas mantener el control del campo de batalla, mientras el terreno fangoso y las pronunciadas laderas aumentaban el desgaste de quienes intentaban romper sus líneas.
        </p>
      </div>
  )
}

export default Lucia