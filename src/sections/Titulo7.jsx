import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Titulo2 = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Más grande al inicio para que no se vea la máscara al principio
  const initialMaskSize = "96000%";
  const finalMaskSize = "80%";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Configuración inicial
      gsap.set(".mask-wrapper7", {
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "50% 50%",
        maskPosition: "50% 50%",
        WebkitMaskSize: initialMaskSize,
        maskSize: initialMaskSize,
        backgroundColor: "#ffffff",
      });

      gsap.set(".content-inside", {
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".content-inside", {
        yPercent: -50,
        ease: "none",
        duration: 2,
      })
        .to(".mask-wrapper7", {
          backgroundColor: "#000000",
          WebkitMaskSize: finalMaskSize,
          maskSize: finalMaskSize,
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(
          ".content-inside",
          {
            opacity: 0,
            duration: 1.2,
            ease: "none",
          },
          "<"
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }

        .mask-wrapper7 {
          width: 100%;
          height: 100%;
          position: relative;
          background: #ffffff;
        }
       
      `}</style>
      <div className="mask-wrapper7">
        <div className="content-inside">
          <div className="img-merge">
            <img
              className="line-img"
              src="/images/ilustraciones/Ilustracion20Linea.webp"
              alt="línea"
            />
            <img
              className="color-img"
              src="/images/ilustraciones/Ilustracion20Color.webp"
              alt="color"
            />
          </div>

          <p className="story-text">
            El ejército español comprobó que no se trataba solo de hombres agotados, sino de tropas capaces de rehacerse bajo el fuego. Esa tenacidad, sumada a la ayuda de campesinos que llevaron ropas y vituallas, permitió recomponer las filas patriotas. Con lo puesto y la moral a duras penas sostenida, la tropa marchó hacia Paipa no a celebrar, sino a reorganizarse y prepararse para el próximo choque con las fuerzas españolas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Titulo2;
