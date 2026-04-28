import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Jason = () => {
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
    <section className="jason">
      <style>{`
        .jason {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 0 0 120px;
          background: #ffffff;
          overflow: hidden;
        }

        .img-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 90px;
          align-items: center;
        }

        .img-merge {
          width: auto;
          height: auto;
          position: relative;
          overflow: hidden;
        }

        .img-merge img {
          height: auto;
          object-fit: cover;
          display: block;
          will-change: transform;
        }

        .line-img {
          position: relative;
          z-index: 1;
        }

        .color-img {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          opacity: 0.7;
        }

        .mask {
          width: 100%;
          height: 1080px;
          overflow: hidden;
          position: relative;
        }

        .mask img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .mask-2 {
          clip-path: polygon(0 0%, 100% 10%, 100% 100%, 0% 88%);
        }

        .mask-3 {
          clip-path: polygon(0 12%, 100% 0%, 100% 92%, 0% 100%);
        }

        .story-text {
          width: min(980px, 86%);
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.9;
          color: #1f1f1f;
          text-align: justify;
          font-family: Georgia, "Times New Roman", serif;
        }

        @media (max-width: 1200px) {
          .story-text {
            font-size: 16px;
            line-height: 1.8;
          }
        }

        @media (max-width: 768px) {
          .story-text {
            font-size: 15px;
            line-height: 1.7;
            width: 90%;
          }

          .img-box {
            gap: 50px;
          }

          .img-merge {
            width: 100%;
            height: auto;
          }
        }

      `}</style>

      <div className="img-box">
        <div className="img-merge">
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
        </div>

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
  )
}

export default Jason