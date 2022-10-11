import React, { useContext } from 'react'
import AddButton from '../../components/button/AddButton'
import TopComponent from '../../components/navTop/TopComponent'
import AuthContext from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import Table from '../../components/table/Table'
import useData from '../../hooks/useData'

const Movements = () => {
    const { token } = useContext(AuthContext);
    const { data } = useData("http://localhost:1337/movements");

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
      <div className="table-container p-6">
        <Table datas={data} type="movement" />
      </div>
    </section>
  )
}

export default Movements