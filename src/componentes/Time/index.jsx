import Card from "../Card";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({
  id,
  nomeTime,
  cor,
  colaboradoresPorTime,
  deletarColaborador,
  mudarCor,
  aoFavoritar,
}) => {
  return colaboradoresPorTime.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundColor: hexToRgba(cor, 0.6),
        backgroundImage: "url(/imagens/fundo.png)",
      }}
    >
      <input
        type="color"
        className="input_cor"
        value={cor}
        onChange={(ev) => mudarCor(ev.target.value, id)}
      />
      <h3 style={{ borderBottomColor: cor }}>{nomeTime}</h3>
      <div className="cards">
        {colaboradoresPorTime.map((colaborador) => (
          <Card
            key={colaborador.id}
            id={colaborador.id}
            imagem={colaborador.imagem}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            time={colaborador.time}
            cor={cor}
            deletarColaborador={deletarColaborador}
            aoFavoritar={aoFavoritar}
            favoritar={colaborador.favoritar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
