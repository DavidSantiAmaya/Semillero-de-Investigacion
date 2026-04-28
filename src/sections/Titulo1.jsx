import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ComingSoon from "./ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const Titulo1 = () => {
  const heroRef = useRef(null);

  const initialMaskPosition = "50% 50%";
  const initialMaskSize = "5000%";

  const finalMaskPosition = "85% 50%";
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
        backgroundColor: "#000",
      });

      gsap.set(".scale-out", {
        scale: 1.25,
        opacity: 1,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 2.5,
          pin: true,
        },
        defaults: { ease: "power1.inOut" },
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
        )
        .to(".mask-wrapper1", {
          backgroundColor: "#000",
          duration: 0.5,
        });
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