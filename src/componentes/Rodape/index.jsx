import "./Rodape.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="icones_midias_sociais">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="./imagens/fb.png" alt="icone facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="./imagens/ig.png" alt="" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src="./imagens/tw.png" alt="" />
        </a>
      </div>
      <div className="logo_organo">
        <img src="./imagens/logo.png" alt="" />
      </div>
      <div className="desenvolvido_por">
        <p>Desenvolvido por Barbara</p>
      </div>
    </div>
  );
};

export default Rodape;
