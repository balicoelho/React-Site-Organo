import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { inicial, times as timesJs } from "./database";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [colaboradores, setColaboradores] = useState(inicial);

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const [times, setTimes] = useState(timesJs);

  const mudarCorTime = (cor, timeNome) => {
    setTimes(
      times.map((time) => {
        if (time.id === timeNome) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const salvarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const aoFavoritar = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favoritar = !colaborador.favoritar;
        }
        return colaborador;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        salvarTime={salvarTime}
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
        timesArray={times.map((time) => time.nome)}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time) => (
          <Time
            id={time.id}
            mudarCor={mudarCorTime}
            deletarColaborador={deletarColaborador}
            key={time.id}
            nomeTime={time.nome}
            cor={time.cor}
            colaboradoresPorTime={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoFavoritar={aoFavoritar}
          />
        ))}
      </section>

      <Rodape />
    </div>
  );
}

export default App;
