import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./sections/NavBar";
import Titulo1 from "./sections/Titulo1";
import Jason from "./sections/Jason";
import Titulo2 from "./sections/Titulo2";
import Lucia from "./sections/Lucia";
import Personajes from "./sections/Personajes";

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

function Home() {
  return (
    <div style={{ width: "100%", minHeight: "100dvh" }}>
      <NavBar />
      <Titulo1 />
      <Jason />
      <Titulo2 />
      <Lucia />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const direction = location.state?.direction ?? 1;

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100dvh", overflowX: "hidden" }}>
      <Home />

      <AnimatePresence mode="sync" initial={false} custom={direction}>
        {location.pathname === "/personajes" && (
          <motion.div
            key="personajes"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            style={{
              position: "fixed",
              inset: 0,
              width: "100%",
              height: "100dvh",
              overflowY: "auto",
              overflowX: "hidden",
              background: "#fff",
              zIndex: 9999,
              WebkitOverflowScrolling: "touch",
              willChange: "transform",
            }}
          >
            <Personajes />
          </motion.div>
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