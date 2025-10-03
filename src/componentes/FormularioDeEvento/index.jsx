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
  const [outroValor, setOutroValor] = useState("");
  const [mensagem, setMensagem] = useState("");

  function aoFormSubmetido(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Escolha o tema correto (Outro tema ou selecionado)
    const temaEscolhido =
      valorSelecionado === "outro" ? outroValor : valorSelecionado;

    if (!temaEscolhido) {
      alert("Selecione um tema válido!");
      return;
    }

    const novoEvento = {
      capa: formData.get("imagemEvento"),
      tema: temaEscolhido,
      data: formData.get("dataEvento"),
      titulo: formData.get("nomeEvento"),
      descricao: formData.get("descricaoEvento"),
    };

    adicionarEvento(novoEvento);
    setMensagem("Evento criado com sucesso!");
    event.target.reset();
    setValorSelecionado("");
    setOutroValor("");
  }

  return (
    <form className="form-evento" onSubmit={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Ex: Summer Dev"
            required
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="imagemEvento">URL da imagem do evento</Label>
          <CampoDeEntrada
            type="text"
            id="imagemEvento"
            name="imagemEvento"
            placeholder="Cole aqui a URL da imagem do evento"
            required
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="descricaoEvento">Descrição do evento</Label>
          <CampoDeEntrada
            type="text"
            id="descricaoEvento"
            name="descricaoEvento"
            placeholder="Sobre o que é o evento"
            required
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            required
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSuspensa
            valorSelecionado={valorSelecionado}
            setValorSelecionado={setValorSelecionado}
            outroValor={outroValor}
            setOutroValor={setOutroValor}
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
