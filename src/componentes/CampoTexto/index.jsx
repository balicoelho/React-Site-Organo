import "./CampoTexto.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CampoTexto = ({
  label,
  type,
  obrigatorio,
  aoDigitado,
  valor,
  show,
  changeShow,
  showEye,
}) => {
  const placeholder = `Digite seu ${label.toLowerCase()}`;

  return (
    <div className={`campo campo_${type}`}>
      <label>{label}</label>
      {showEye ? (
        show ? (
          <AiFillEye
            className={`icone_show_${type}`}
            size={20}
            onClick={changeShow}
          />
        ) : (
          <AiFillEyeInvisible
            className={`icone_show_${type}`}
            size={20}
            onClick={changeShow}
          />
        )
      ) : null}

      <input
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
        onChange={aoDigitado}
        value={valor}
      ></input>
      {show ? <div className="digitacao">{valor}</div> : null}
    </div>
  );
};

export default CampoTexto;
