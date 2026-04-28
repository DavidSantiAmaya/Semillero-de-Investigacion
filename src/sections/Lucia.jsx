import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Lucia = () => {
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
          scrub: 2,
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
          En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas, vino a agotarse parte de la fatiga de la campaña libertadora. Tras los combates de Gámeza y Tópaga, las columnas patriotas avanzaron exhaustas: hombres helados, con los uniformes hechos jirones, algunos descalzos, pero firmes en su decisión de seguir adelante. No marchaban solo contra el enemigo, sino contra el cansancio y el hambre. Estas montañas no son un simple paisaje; son testigos del desgaste que precedió a la Batalla del Pantano de Vargas.
        </p>
      </div>
  )
}

export default Lucia