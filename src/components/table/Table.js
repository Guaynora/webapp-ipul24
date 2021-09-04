import HeadTable from "./HeadTable";
import RowTable from "./RowTable";

function Table({ datas, type }) {
  return (
    <table className="table is-fullwidth is-striped">
      <thead>
        <tr>
          <HeadTable type={type} />
        </tr>
      </thead>
      <tbody>
        {datas.length > 0 ? (
          datas.map((el) => <RowTable data={el} key={el.id} type={type} />)
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
