import { useState } from "react";
import "./lista-suspesa.estilos.css";

export function ListaSuspensa({ valorSelecionado, setValorSelecionado }) {
  const [outroValor, setOutroValor] = useState("");

  function handleChange(e) {
    setValorSelecionado(e.target.value);
  }

  return (
    <div>
      <select
        className="lista-suspensa-form"
        required
        name="temaEvento"
        value={valorSelecionado}
        onChange={handleChange}
      >
        <option value="">Selecione o tipo/tema do evento</option>
        <optgroup label="Temas de evento">
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="DevOps">DevOps</option>
          <option value="Inteligencia-Artificial">
            Inteligência Artificial
          </option>
          <option value="Data-Science">Data Science</option>
          <option value="Cloud">Cloud</option>
          <option value="outro">Outro</option>
        </optgroup>
      </select>

      {valorSelecionado === "outro" && (
        <input
          type="text"
          className="input-outro"
          placeholder="Digite o tema do evento"
          value={outroValor}
          onChange={(e) => setOutroValor(e.target.value)}
        />
      )}
    </div>
  );
}
