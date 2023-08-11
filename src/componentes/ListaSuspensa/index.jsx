import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const { label, itens, aoAlterar, valor, obrigatorio } = props;

  return (
    <div className="lista_suspensa">
      <label>{label}</label>
      <select value={valor} onChange={aoAlterar} required={obrigatorio}>
        <option value="Selecione"></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
