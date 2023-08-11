import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

let id = 0;
const Formulario = ({ aoColaboradorCadastrado, timesArray }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    const colaboradorCadastrado = {
      id: id++,
      nome,
      cargo,
      imagem,
      time,
    };
    aoColaboradorCadastrado(colaboradorCadastrado);
    setCargo("");
    setImagem("");
    setNome("");
    setTime("");
  };

  return (
    <div className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Preencha os dados para criar o card do colaborador</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          type="text"
          aoDigitado={(ev) => setNome(ev.target.value)}
          valor={nome}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          type="text"
          aoDigitado={(ev) => setCargo(ev.target.value)}
          valor={cargo}
        />
        <CampoTexto
          label="Imagem"
          type="text"
          aoDigitado={(ev) => setImagem(ev.target.value)}
          valor={imagem}
        />
        <ListaSuspensa
          label="Time"
          itens={timesArray}
          aoAlterar={(ev) => setTime(ev.target.value)}
          valor={time}
          obrigatorio={true}
        />
        <Botao>Criar card</Botao>
      </form>
    </div>
  );
};

export default Formulario;
