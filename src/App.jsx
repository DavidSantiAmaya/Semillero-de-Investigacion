import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import NavBar from "./sections/NavBar";

import HeroLanding from "./sections/ImageSlider/HeroLanding";

import Titulo1 from "./sections/Titulo1";
import Capitulo1 from "./sections/capitulo1";

import Titulo2 from "./sections/Titulo2";
import Capitulo2 from "./sections/capitulo2";

import Titulo3 from "./sections/Titulo3";
import Capitulo3 from "./sections/capitulo3";

import Titulo4 from "./sections/Titulo4";
import Capitulo4 from "./sections/capitulo4";

import Titulo5 from "./sections/Titulo5";
import Capitulo5 from "./sections/capitulo5";

import Titulo6 from "./sections/Titulo6";
import Capitulo6 from "./sections/capitulo6";

import Titulo7 from "./sections/Titulo7";

import Personajes from "./sections/Personajes";
import Historia from "./sections/SectionHistory/History";

import Footer from "./sections/footer";

const variants = {
  initial: (direction) => ({
    x: direction === 1 ? "100%" : "-100%",
  }),
  animate: {
    x: "0%",
  },
  exit: (direction) => ({
    x: direction === 1 ? "-100%" : "100%",
  }),
};

const transition = {
  type: "tween",
  duration: 0.45,
  ease: [0.25, 0.8, 0.25, 1],
};

const MotionDiv = motion.div;
const Capitulo7 = lazy(() => import("./sections/capitulo7"));

function Capitulo7Diferido() {
  const seccionRef = useRef(null);
  const [debeCargar, setDebeCargar] = useState(false);

  useEffect(() => {
    const seccion = seccionRef.current;
    if (!seccion || !("IntersectionObserver" in window)) {
      setDebeCargar(true);
      return undefined;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setDebeCargar(true);
        observador.disconnect();
      },
      { rootMargin: "1500px 0px" },
    );

    observador.observe(seccion);
    return () => observador.disconnect();
  }, []);

  return (
    <section ref={seccionRef} id="capitulo7" style={{ minHeight: "400svh" }}>
      {debeCargar ? (
        <Suspense fallback={<div className="capitulo7-carga" aria-label="Cargando modelo 3D" />}>
          <Capitulo7 />
        </Suspense>
      ) : (
        <div className="capitulo7-carga" aria-hidden="true" />
      )}
    </section>
  );
}

function Home({ showFooter }) {
  return (
    <div style={{ width: "100%", minHeight: "100dvh" }}>

      <section id="titulo1">
        <Titulo1 />
      </section>

      <section id="capitulo1">
        <Capitulo1 />
      </section>

      <section id="titulo2">
        <Titulo2 />
      </section>

      <section id="capitulo2">
        <Capitulo2 />
      </section>

      <section id="titulo3">
        <Titulo3 />
      </section>

      <section id="capitulo3">
        <Capitulo3 />
      </section>

      <section id="titulo4">
        <Titulo4 />
      </section>

      <section id="capitulo4">
        <Capitulo4 />
      </section>

      <section id="titulo5">
        <Titulo5 />
      </section>

      <section id="capitulo5">
        <Capitulo5 />
      </section>

      <section id="titulo6">
        <Titulo6 />
      </section>

      <section id="capitulo6">
        <Capitulo6 />
      </section>

      <section id="titulo7">
        <Titulo7 />
      </section>

      <Capitulo7Diferido />

      {showFooter && <Footer />}
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const direction = location.state?.direction ?? 1;
  const hideFooter = [
    "/hero",
    "/lugares",
    "/historia",
    "/personajes",
  ].includes(location.pathname);
  const pages = {
    "/hero": <HeroLanding />,
    "/lugares": <HeroLanding />,
    "/historia": <Historia />,
    "/personajes": <Personajes />,
  };

  const CurrentPage = pages[location.pathname];
  const pageStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    minHeight: "100dvh",
    overflowY: "auto",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        overflowX: "hidden",
      }}
    >
      <Home showFooter={!hideFooter} />

      <AnimatePresence mode="sync" initial={false} custom={direction}>
        {CurrentPage && (
          <MotionDiv
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            style={pageStyle}
          >
            {CurrentPage}
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AnimatedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
