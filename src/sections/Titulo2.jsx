// Hero.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const heroRef = useRef(null);

  const initialMaskPosition = "50% 50%";
  const initialMaskSize = "5000%";

  const finalMaskPosition = "50% 50%";
  const finalMaskSize = "80%";

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // estado inicial
      gsap.set(".mask-wrapper", {
        maskPosition: initialMaskPosition,
        WebkitMaskPosition: initialMaskPosition,

        maskSize: initialMaskSize,
        WebkitMaskSize: initialMaskSize,

        backgroundColor: "#000"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 2.5,
          pin: true
        }
      });

      tl

        // texto fade
        .to(".fade-out", {
          opacity: 0,
          ease: "power1.inOut"
        })

        // zoom fondo
        .to(".scale-out", {
          scale: 1,
          ease: "power1.inOut"
        })

        // animación máscara
        .to(".mask-wrapper", {
          maskSize: finalMaskSize,
          WebkitMaskSize: finalMaskSize,

          maskPosition: finalMaskPosition,
          WebkitMaskPosition: finalMaskPosition,

          ease: "power1.inOut"
        }, "<")

        // movimiento imagen line
        .to(".line-img", {
          y: -60,
          ease: "none"
        }, "<")

        // movimiento imagen color
        .to(".color-img", {
          y: -110,
          ease: "none"
        }, "<")

        // ocultar contenido al final
        .to(".content-inside", {
          opacity: 0,
          ease: "power1.inOut"
        })

        // fondo negro final
        .to(".mask-wrapper", {
          backgroundColor: "#000"
        });

    }, heroRef);

    return () => ctx.revert();
  });

  return (
    <section ref={heroRef} className="hero-section">

      {/* 🔥 CONTENEDOR CON MÁSCARA */}
      <div className="mask-wrapper size-full relative overflow-hidden">

        {/* fondo */}
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out absolute inset-0 w-full h-full object-cover"
        />

        {/* 👇 TODO VA DENTRO DE LA MÁSCARA */}
        <div className="content-inside relative z-10 flex flex-col items-center justify-center h-full px-5">

          <div className="img-merge w-full max-w-5xl relative overflow-hidden">
            <img
              className="line-img w-full block relative z-10"
              src="/images/Ilustracion_1_Linea.webp"
              alt="linea"
            />

            <img
              className="color-img w-full absolute top-0 left-0 z-20 opacity-80"
              src="/images/Ilustracion_1_Color.webp"
              alt="color"
            />
          </div>

          <p className="story-text fade-out mt-10 max-w-3xl text-white text-lg md:text-2xl text-center">
            En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas,
            vino a agotarse parte de la fatiga de la campaña libertadora...
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;