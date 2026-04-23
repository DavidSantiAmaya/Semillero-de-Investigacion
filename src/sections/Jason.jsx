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
        backgroundColor: "#000",
      });

      gsap.set(".line-img", { willChange: "transform" });
      gsap.set(".color-img", { willChange: "transform" });

      const sections = gsap.utils.toArray(".img-merge");

      sections.forEach((section) => {
        const line = section.querySelector(".line-img");
        const color = section.querySelector(".color-img");

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

      // La máscara empieza después de que las imágenes ya hayan tenido movimiento
      gsap.to(".mask-wrapper2", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 2.5,
          pin: true,
        },
        WebkitMaskSize: finalMaskSize,
        maskSize: finalMaskSize,
        WebkitMaskPosition: finalMaskPosition,
        maskPosition: finalMaskPosition,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="mask-wrapper2 size-full relative overflow-hidden">
        <div className="img-box relative z-10 flex flex-col gap-24 py-40 px-5 md:px-10">

          <div className="img-merge relative overflow-hidden">
            <img
              className="line-img w-full block relative z-10"
              src="/images/ilustraciones/Ilustracion1linea.webp"
              alt="Ilustración línea"
            />
            <img
              className="color-img w-full absolute top-0 left-0 z-20 opacity-70"
              src="/images/ilustraciones/Ilustracion1Color.webp"
              alt="Ilustración color"
            />
          </div>

          <p className="story-text-2 max-w-3xl mx-auto text-center text-white text-lg md:text-2xl">
            En estas tierras de Boyacá, marcadas por el frío y el silencio de las montañas, vino a agotarse parte de la fatiga de la campaña libertadora.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Titulo2;