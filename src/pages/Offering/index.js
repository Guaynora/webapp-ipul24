import { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import AddButton from "../../components/button/AddButton";
import Table from "../../components/table/Table";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import useData from "../../hooks/useData";

function Offering() {
  const { token } = useContext(AuthContext);

  const { data } = useData("http://localhost:1337/offerings");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Ofrendas</h3>
        <AddButton text="ofrenda" />
      </div>
      <div className="table-container p-6">
        <Table datas={data} type="offering" />
      </div>
    </section>
  );
}

export default Offering;
