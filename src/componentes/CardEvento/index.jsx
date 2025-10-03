import React from "react";
import "./cardEvento.css";

export const CardEvento = ({ evento }) => {
  return (
    <div className="card-evento">
      <img
        src={evento.capa || "/default.png"}
        alt={evento.titulo}
        className="card-imagem"
      />
      <div className="card-conteudo">
        <h4>{evento.titulo}</h4>
        <p className="tag">{evento.tema}</p>
        <p className="descricao">
          {evento.descricao?.length > 100
            ? evento.descricao.substring(0, 100) + "..."
            : evento.descricao}
        </p>
        <p className="data">
          {new Date(evento.data).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
};
