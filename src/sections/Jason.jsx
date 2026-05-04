import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Jason = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray(".img-merge");

    sections.forEach((section) => {
      const line = section.querySelector(".line-img");
      const color = section.querySelector(".color-img");

      if (!line || !color) return;

      gsap.to(line, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
        y: -60,
        ease: "none",
      });

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
      );
    });
  }, []);

  return (
    <section className="jason">
      <div className="img-box">
        <div className="img-merge first-image">
          <img
            className="line-img"
            src="/images/ilustraciones/Ilustracion1Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion1Color.webp"
            alt="Ilustracion color"
          />

          <button className="floating-button circle-button">
          <img className="line-img" src="/images/Botones/boton_Personajes_Linea.webp" alt="Ver personajes" />
          <img className="color-img" src="/images/Botones/botones_Personajes_Color.webp" alt="Ver personajes" />
          </button>

        </div>

          <button className="floating-button circle-button">
          <img className="line-img" src="/images/Botones/boton_Personajes_Linea.webp" alt="Ver personajes" />
          <img className="color-img" src="/images/Botones/botones_Personajes_Color.webp" alt="Ver personajes" />
          </button>

        <p className="story-text">
          En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas, vino a agotarse parte de la fatiga de la campaña libertadora. Tras los combates de Gámeza y Tópaga, las columnas patriotas avanzaron exhaustas: hombres helados, con los uniformes hechos jirones, algunos descalzos, pero firmes en su decisión de seguir adelante. No marchaban solo contra el enemigo, sino contra el cansancio y el hambre. Estas montañas no son un simple paisaje; son testigos del desgaste que precedió a la Batalla del Pantano de Vargas.
        </p>

        <div className="img-merge">
          <img
            className="line-img"
            src="/images/ilustraciones/Ilustracion2Linea.webp"
            alt="Ilustracion linea"
          />
          <img
            className="color-img"
            src="/images/ilustraciones/Ilustracion2Color.webp"
            alt="Ilustracion color"
          />
        </div>

        <p className="story-text">
          Días antes de llegar a Paipa, en medio de estas tierras frías de Boyacá, Simón Bolívar y Francisco de Paula Santander se detuvieron a reorganizar lo poco que quedaba en pie. Allí redistribuyeron hombres y evaluaron cada paso con cautela. Ambos calculaban marchas y breves descansos como quien cuenta las últimas monedas antes de la escasez definitiva, conscientes de que cada decisión podía inclinar el destino de la campaña.
        </p>
      </div>
    </section>
  );
};

export default Jason;
