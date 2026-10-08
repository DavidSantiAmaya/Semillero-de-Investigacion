import React, { useRef } from "react";
import { getAssetPath } from '../utils/assetPath';
import { gsap } from "../utils/gsap";
import { useGSAP } from "@gsap/react";
import { useIllustrationParallax } from "../hooks/useIllustrationParallax";

const Titulo2 = () => {
  const heroRef = useRef(null);
  useIllustrationParallax(heroRef);

  // Más grande al inicio para que no se vea la máscara al principio
  const initialMaskPosition = "50% 50%";
  const initialMaskSize = "15000%";
  const finalMaskPosition = "50% 50%";
  const finalMaskSize = "80%";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Configuración inicial
      gsap.set(".mask-wrapper5", {
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: initialMaskPosition,
        maskPosition: initialMaskPosition,
        WebkitMaskSize: initialMaskSize,
        maskSize: initialMaskSize,
        backgroundColor: "#ffffff",
        width: "100vw",
        height: "100dvh",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
      });

      gsap.set(".content-inside", {
        opacity: 1,
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(".content-inside", {
        yPercent: -50,
        ease: "none",
        duration: 2,
      })
        .to(".mask-wrapper5", {
          backgroundColor: "#000000",
          WebkitMaskSize: finalMaskSize,
          maskSize: finalMaskSize,
          WebkitMaskPosition: finalMaskPosition,
          maskPosition: finalMaskPosition,
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

        .mask-wrapper5 {
          width: 100%;
          height: 100%;
          position: relative;
          background: #ffffff;
        }
       
      `}</style>
      <div className="mask-wrapper5">
        <div className="content-inside">
          <div className="img-merge">
            <img
              className="line-img"
              src={getAssetPath("/images/ilustraciones/Ilustracion13Linea.webp")}
              alt="línea"
            />
            <img
              className="color-img"
              src={getAssetPath("/images/ilustraciones/Ilustracion13Color.webp")}
              alt="color"
            />
          </div>

          <p className="story-text">
            En medio de aquel escenario, la superioridad que hasta entonces ofrecían las alturas comenzó a disminuir. El enfrentamiento entró en un momento decisivo: la batalla ya no dependía únicamente de la posición defensiva de los realistas, sino de la capacidad de ambos ejércitos para aprovechar cualquier oportunidad que cambiará el curso del combate.
          </p>
          <p className="story-text"></p>
          <p className="story-text"></p>
          <p className="story-text"></p>
        </div>
      </div>
    </section>
  );
};

export default Titulo2;




