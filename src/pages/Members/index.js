import { useContext } from "react";
import AddButton from "../../components/button/AddButton";
import Table from "../../components/table/Table";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import useData from "../../hooks/useData";
import '../../styles/pages.css'

function Members() {
  const { token } = useContext(AuthContext);

  const { data } = useData("http://localhost:1337/members");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Miembros</h3>
        <AddButton text="miembro" />
      </div>

      <div className="table-container p-6">
        <Table datas={data} type="member" />
      </div>
    </section>
  );
}

export default Members;
