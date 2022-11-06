import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import AddButton from "../../components/button/AddButton";
import Table from "../../components/table/Table";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import useData from "../../hooks/useData";

function Tithe() {
  const { token } = useContext(AuthContext);

  const { data } = useData(`${process.env.REACT_APP_APIURL}/tithes`);
  const totalTithes = useData(
    `${process.env.REACT_APP_APIURL}/tithes/percents`
  );

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Diezmos</h3>
        <AddButton text="diezmo" />
      </div>
      <div className="container-values mx-6 mt-4">
        <div className="cardshow-values">
          <p className="title-cardshow">Total Diezmo</p>
          <p>{totalTithes.data.total}</p>
        </div>
        <div className="cardshow-values">
          <p className="title-cardshow">10%</p>
          <p>{totalTithes.data.tenPercent}</p>
        </div>
        <div className="cardshow-values">
          <p className="title-cardshow">2%</p>
          <p>{totalTithes.data.twoPercent}</p>
        </div>
        <div className="cardshow-values">
          <p className="title-cardshow">5%</p>
          <p>{totalTithes.data.fivePercent}</p>
        </div>
      </div>
      <div className="table-container p-6">
        <Table datas={data} type="tithe" />
      </div>
    </section>
  );
}

export default Tithe;
