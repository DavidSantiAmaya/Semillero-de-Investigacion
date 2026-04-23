import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Titulo2 = () => {
  const heroRef = useRef(null);

  const initialMaskPosition = "50% 50%";
  const initialMaskSize = "5000%";
  const finalMaskPosition = "50% 50%";
  const finalMaskSize = "80%";

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mask-wrapper2", {
        WebkitMaskImage: "url('/images/big-hero-text.svg')",
        maskImage: "url('/images/big-hero-text.svg')",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: initialMaskPosition,
        maskPosition: initialMaskPosition,
        WebkitMaskSize: initialMaskSize,
        maskSize: initialMaskSize,
        backgroundColor: "#ffffff",
      });

      gsap.set(".scale-out-2", {
        scale: 1.15,
        opacity: 1,
        transformOrigin: "center center",
      });

      gsap.set([".line-img", ".color-img"], {
        willChange: "transform",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 2.5,
          pin: true,
        },
        defaults: { ease: "power1.inOut" },
      });

      tl.to(".scale-out-2", {
        scale: 1,
        duration: 1,
      })
        .to(
          ".mask-wrapper2",
          {
            WebkitMaskSize: finalMaskSize,
            maskSize: finalMaskSize,
            WebkitMaskPosition: finalMaskPosition,
            maskPosition: finalMaskPosition,
            duration: 1,
          },
          "<"
        )
        .to(
          ".line-img",
          {
            y: -60,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .to(
          ".color-img",
          {
            y: -110,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .to(
          ".story-text-2",
          {
            opacity: 0,
            duration: 0.7,
          },
          ">"
        )
        .to(
          ".final-image",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          "<"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="mask-wrapper2 size-full relative overflow-hidden">

        <div className="content-inside relative z-10 flex flex-col items-center justify-center h-full px-5">
          <div className="img-merge w-full max-w-5xl relative overflow-hidden">
            <img
              className="line-img w-full block relative z-10"
              src="/images/ilustraciones/Ilustracion1linea.webp"
              alt="línea"
            />
            <img
              className="color-img w-full absolute top-0 left-0 z-20 opacity-80"
              src="/images/ilustraciones/Ilustracion1Color.webp"
              alt="color"
            />
          </div>

          <p className="story-text-2 mt-10 max-w-3xl text-white text-lg md:text-2xl text-center">
            En estas tierras de Boyacá, marcadas por el frío y el silencio de las
            montañas, vino a agotarse parte de la fatiga de la campaña libertadora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Titulo2;