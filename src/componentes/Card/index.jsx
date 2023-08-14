import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./Card.css";

const Card = ({
  imagem,
  nome,
  cargo,
  cor,
  aoDeletar,
  id,
  deletarColaborador,
  aoFavoritar,
  favoritar,
}) => {
  aoDeletar = () => deletarColaborador(id);

  const aoFavoritarCard = () => {
    aoFavoritar(id);
  };

  const propFavoritar = {
    size: 25,
    onClick: aoFavoritarCard,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={aoDeletar}
      ></AiFillCloseCircle>
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt="foto-perfil"></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favoritar ? (
            <AiFillHeart color="red" {...propFavoritar} />
          ) : (
            <AiOutlineHeart {...propFavoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
