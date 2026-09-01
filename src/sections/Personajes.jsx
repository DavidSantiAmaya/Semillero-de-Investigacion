import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Personajes.css";

import Hero from "./SectionsPersonajes/Hero";
import Accordion from "./SectionsPersonajes/Accordion";
import DetailCard from "./SectionsPersonajes/DetailCard";

import { personajesData } from "../data/personajesData";
import { useContentIndexFromNavigation } from "../utils/contentNavigation";

export default function Personajes() {
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const initialPersonajeIndex = useContentIndexFromNavigation(personajesData);
  const [personajeActivo, setPersonajeActivo] = useState(initialPersonajeIndex);

  const personaje = personajesData[personajeActivo];

  useEffect(() => {
    setPersonajeActivo(initialPersonajeIndex);
  }, [initialPersonajeIndex]);

  useEffect(() => {
    const page = pageRef.current;
    const scrollContainer = page?.closest("[data-route-scroll-container]");

    if (!page || !scrollContainer) return undefined;

    const handleWheel = (event) => {
      const lineHeight = 16;
      const pageHeight = scrollContainer.clientHeight;
      const deltaY =
        event.deltaY *
        (event.deltaMode === 1
          ? lineHeight
          : event.deltaMode === 2
            ? pageHeight
            : 1);

      if (!deltaY) return;

      event.preventDefault();
      scrollContainer.scrollBy({ top: deltaY, behavior: "auto" });
    };

    page.addEventListener("wheel", handleWheel, { passive: false });
    return () => page.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main ref={pageRef} className="bolivar-page">
      <div className="back-button-container">
        <button
          className="back-button"
          onClick={() =>
            navigate("/", {
              state: { direction: -1 },
            })
          }
        >
          ←
        </button>
      </div>

      <Accordion
        personajes={personajesData}
        personajeActivo={personajeActivo}
        onSelect={setPersonajeActivo}
      />

      <Hero personaje={personaje} />

      <DetailCard accordion={personaje.accordion} />
    </main>
  );
}
