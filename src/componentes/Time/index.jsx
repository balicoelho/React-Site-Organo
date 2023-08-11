import Card from "../Card";
import "./Time.css";

const Time = ({
  nomeTime,
  corPrimaria,
  corSecundaria,
  colaboradoresPorTime,
}) => {
  return colaboradoresPorTime.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderBottomColor: corPrimaria }}>{nomeTime}</h3>
      <div className="cards">
        {colaboradoresPorTime.map((colaborador) => (
          <Card
            key={colaborador.id}
            imagem={colaborador.imagem}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            time={colaborador.time}
            corPrimaria={corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
