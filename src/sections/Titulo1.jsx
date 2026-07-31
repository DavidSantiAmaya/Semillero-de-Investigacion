import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Titulo1 = () => {
  const heroRef = useRef(null);

  const initialMaskPosition = "50% 50%";
  const initialMaskSize = "15000%";

  const finalMaskPosition = "50% 50%";
  const finalMaskSize = "80%";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mask-wrapper1", {
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",

        WebkitMaskPosition: initialMaskPosition,
        maskPosition: initialMaskPosition,

        WebkitMaskSize: initialMaskSize,
        maskSize: initialMaskSize,

        backgroundColor: "#ffffff",

        // Ocupa toda la pantalla
        width: "100vw",
        height: "100vh",

        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden",
      });

      gsap.set(".scale-out", {
        scale: 1.25,
        opacity: 1,

        // El centro es el punto de escala
        transformOrigin: "50% 50%",

        // La imagen ocupa todo el contenedor
        width: "100%",
        height: "100%",

        // Mantiene proporción 1920x1080
        objectFit: "cover",
        objectPosition: "50% 50%",

        display: "block",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.6,
          pin: true,
        },
        defaults: {
          ease: "power1.inOut",
        },
      });

      tl.to(".scale-out", {
        scale: 1,
        duration: 1,
      })
        .to(
          ".mask-wrapper1",
          {
            WebkitMaskSize: finalMaskSize,
            maskSize: finalMaskSize,

            WebkitMaskPosition: finalMaskPosition,
            maskPosition: finalMaskPosition,

            backgroundColor: "#000000",

            duration: 1,
          },
          "<"
        )
        .to(
          ".scale-out",
          {
            opacity: 0,
            duration: 0.8,
          },
          "<"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="mask-wrapper1">
        <img
          src="/images/ilustraciones/Titulo1.png"
          alt="background"
          className="scale-out"
        />
      </div>
    </section>
  );
};

export default Titulo1;