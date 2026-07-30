import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Personajes.css";

import Hero from "./SectionsPersonajes/Hero";
import Accordion from "./SectionsPersonajes/Accordion";

import { personajesData } from "../data/personajesData";
import { useContentIndexFromNavigation } from "../utils/contentNavigation";

export default function Personajes() {
  const navigate = useNavigate();
  const initialPersonajeIndex = useContentIndexFromNavigation(personajesData);
  const [personajeActivo, setPersonajeActivo] = useState(initialPersonajeIndex);

  const personaje = personajesData[personajeActivo];

  useEffect(() => {
    setPersonajeActivo(initialPersonajeIndex);
  }, [initialPersonajeIndex]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, []);

  return (
    <main className="bolivar-page">
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

      <Hero personaje={personaje} />

      <Accordion
        personajes={personajesData}
        personajeActivo={personajeActivo}
        onSelect={setPersonajeActivo}
      />

    </main>
  );
}
