import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Personajes.css";

import Hero from "./SectionsPersonajes/Hero";
import Accordion from "./SectionsPersonajes/Accordion";

import { personajesData } from "../data/personajesData";

export default function Personajes() {
  const navigate = useNavigate();
  const [personajeActivo, setPersonajeActivo] = useState(0);

  const personaje = personajesData[personajeActivo];

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