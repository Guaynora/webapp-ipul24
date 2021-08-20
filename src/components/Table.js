import RowTable from "./RowTable";

function Table({ members }) {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Identificacion</th>
          <th>Fecha de nacimiento</th>
          <th>Bautizado</th>
        </tr>
      </thead>
      <tbody>
        {members.length > 0 ? (
          members.map((el) => <RowTable member={el} key={el.id} />)
        ) : (
          <tr>
            <td colSpan="3">Sin datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
