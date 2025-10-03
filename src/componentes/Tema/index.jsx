// Tema.jsx
import React from "react";
import "./tema.estilos.css";

// Array de temas exportado separadamente
export const temas = [
  { id: 1, nome: "Front-End" },
  { id: 2, nome: "Back-End" },
  { id: 3, nome: "DevOps" },
  { id: 4, nome: "Inteligência Artificial" },
  { id: 5, nome: "Data Science" },
  { id: 6, nome: "Cloud" },
];

export function Tema() {
  return (
    <div className="temas-container">
      {temas.map((tema) => (
        <h3 key={tema.id} className="titulo-tema">
          {tema.nome}
        </h3>
      ))}
    </div>
  );
}
