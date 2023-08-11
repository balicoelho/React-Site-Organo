import "./Card.css";

const Card = ({ imagem, nome, cargo, corPrimaria }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt="foto-perfil"></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Card;
