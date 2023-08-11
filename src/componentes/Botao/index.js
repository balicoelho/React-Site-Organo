import "./Botao.css";

const Botao = (props) => {
  const { children } = props;
  return <button className="botao">{children}</button>;
};

export default Botao;
