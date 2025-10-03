import React, { useState } from "react";
import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ adicionarEvento = () => {} }) {
  const [valorSelecionado, setValorSelecionado] = useState("");
  const [mensagem, setMensagem] = useState(""); // estado para feedback

  function aoFormSubmetido(event) {
    event.preventDefault();

    const formData = event.target;
    const novoEvento = {
      id: Date.now(),
      titulo: formData.nomeEvento.value,
      capa: formData.imagemEvento.value,
      descricao: formData.descricaoEvento.value,
      data: formData.dataEvento.value,
      tema: valorSelecionado,
    };

    try {
      adicionarEvento(novoEvento);
      setMensagem("Evento criado com sucesso! ✅");
      formData.reset();
      setValorSelecionado("");
    } catch (erro) {
      console.error("Erro ao criar evento:", erro);
      setMensagem("Erro ao criar evento. ❌");
    }

    // Limpa a mensagem após 3 segundos
    setTimeout(() => setMensagem(""), 3000);
  }

  return (
    <form className="form-evento" onSubmit={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada type="text" id="nomeEvento" name="nomeEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="imagemEvento">URL da imagem do evento</Label>
          <CampoDeEntrada type="text" id="imagemEvento" name="imagemEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="descricaoEvento">Descrição do evento</Label>
          <CampoDeEntrada
            type="text"
            id="descricaoEvento"
            name="descricaoEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSuspensa
            valorSelecionado={valorSelecionado}
            setValorSelecionado={setValorSelecionado}
          />
        </CampoDeFormulario>
      </div>

      <div className="acoes">
        <Botao type="submit">Criar evento</Botao>
      </div>

      {mensagem && <p className="mensagem-feedback">{mensagem}</p>}
    </form>
  );
}
