import React, { useContext } from "react";
import AddButton from "../../components/button/AddButton";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import Table from "../../components/table/Table";
import useData from "../../hooks/useData";

const Movements = () => {
  const { token } = useContext(AuthContext);
  const { data } = useData(`${process.env.REACT_APP_APIURL}/movements`);
  const totalMovements = useData(
    `${process.env.REACT_APP_APIURL}/movements/months`
  );

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Movimientos</h3>
        <AddButton text="movimiento" />
      </div>
      <div className="container-values mx-6 mt-4">
        <div className="cardshow-values">
          <p className="title-cardshow">Total Ingreso</p>
          <p>{totalMovements.data.total}</p>
        </div>
        <div className="cardshow-values">
          <p className="title-cardshow">Egreso</p>
          <p>{totalMovements.data.total_output}</p>
        </div>
        <div className="cardshow-values">
          <p className="title-cardshow">Ingreso restante</p>
          <p>{totalMovements.data.remainingIncome}</p>
        </div>
      </div>
      <div className="table-container p-6">
        <Table datas={data} type="movement" />
      </div>
    </section>
  );
};

export default Movements;
