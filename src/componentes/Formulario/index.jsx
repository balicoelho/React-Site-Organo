import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ aoColaboradorCadastrado, timesArray, salvarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    const colaboradorCadastrado = {
      id: uuidv4(),
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

  const aoSalvarTime = (ev) => {
    ev.preventDefault();
    const novoTime = { nome: nomeTime, cor: corTime };
    salvarTime(novoTime);
    setNomeTime("");
  };

  let [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
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
          changeShow={changeShow}
          show={show}
          showEye={true}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          type="text"
          aoDigitado={(ev) => setCargo(ev.target.value)}
          valor={cargo}
          showEye={false}
        />
        <CampoTexto
          label="Imagem"
          type="text"
          aoDigitado={(ev) => setImagem(ev.target.value)}
          valor={imagem}
          showEye={false}
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
      <form onSubmit={aoSalvarTime}>
        <h1>Preencha os dados para criar um novo time</h1>
        <CampoTexto
          obrigatorio
          label="Nome do time"
          type="text"
          aoDigitado={(ev) => setNomeTime(ev.target.value)}
          valor={nomeTime}
          showEye={false}
        />
        <CampoTexto
          className="input_cor"
          obrigatorio
          label="Cor do time"
          type="color"
          aoDigitado={(ev) => setCorTime(ev.target.value)}
          valor={corTime}
          showEye={false}
        />

        <Botao>Criar um novo time</Botao>
      </form>
    </div>
  );
};

export default Formulario;
