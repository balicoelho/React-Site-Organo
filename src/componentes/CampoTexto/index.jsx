import "./CampoTexto.css";

const CampoTexto = (props) => {
  const { label, type, obrigatorio, aoDigitado, valor } = props;
  const placeholder = `Digite seu ${label.toLowerCase()}`;

  return (
    <div className="campo_texto">
      <label>{label}</label>
      <input
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
        onChange={aoDigitado}
        value={valor}
      ></input>
    </div>
  );
};

export default CampoTexto;
