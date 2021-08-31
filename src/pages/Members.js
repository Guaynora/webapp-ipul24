import { useContext } from "react";
import AddButton from "../components/AddButton";
import Table from "../components/Table";
import TopComponent from "../components/TopComponent";
import AuthContext from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import useMembers from "../hooks/useMembers";

function Members() {
  const { token } = useContext(AuthContext);

  const { members } = useMembers();

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
        <Table datas={members} type="member" />
      </div>
    </section>
  );
}

export default Members;
