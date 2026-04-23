// Hero.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ComingSoon from "./ComingSoon";

const Hero = () => {

  const heroRef = useRef(null);

  /* =====================================================
     CONFIGURACIÓN DE LA MÁSCARA
  ===================================================== */

  const initialMaskPosition = "50% 50%";
  const initialMaskSize = "5000%";

  const finalMaskPosition = "85% 50%";
  const finalMaskSize = "80%";

  useGSAP(() => {

    const ctx = gsap.context(() => {

      // estado inicial
      gsap.set(".mask-wrapper1", {
        maskPosition: initialMaskPosition,
        WebkitMaskPosition: initialMaskPosition,

        maskSize: initialMaskSize,
        WebkitMaskSize: initialMaskSize,

        backgroundColor: "#000" // fondo inicial negro
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          scrub: 2.5,
          end: "+=200%",
          pin: true
        }
      });

      tl

        // fade inicial
        .to(".fade-out", {
          opacity: 0,
          ease: "power1.inOut"
        })

        // zoom fondo
        .to(".scale-out", {
          scale: 1,
          ease: "power1.inOut"
        })

        // animación máscara (NO desaparecer)
        .to(".mask-wrapper1", {
          maskSize: finalMaskSize,
          WebkitMaskSize: finalMaskSize,

          maskPosition: finalMaskPosition,
          WebkitMaskPosition: finalMaskPosition,

          duration: 1,
          ease: "power1.inOut"
        }, "<")

        // 👇 SOLO ocultamos las imágenes, NO la máscara
        .to(".mask-wrapper1 img", {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut"
        }, "<")

        // 👇 AL FINAL: fondo vuelve a negro
        .to(".mask-wrapper", {
          backgroundColor: "#000",
          duration: 1,
          ease: "power1.inOut"
        });

    }, heroRef);

    return () => ctx.revert();

  });

  return (
    <section ref={heroRef} className="hero-section">

      {/* contenedor con máscara */}
      <div
        className="size-full mask-wrapper"
        style={{ backgroundColor: "#000" }}
      >

        {/* fondo */}
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />

      </div>

      {/* logo dentro de máscara */}
      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <ComingSoon />

    </section>
  );
};

export default Hero;