import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormTithe from "../components/form/FormTithe";
import SubmitButton from "../components/button/SubmitButton";
import TopComponent from "../components/navTop/TopComponent";
import AuthContext from "../context/AuthContext";
import useData from "../hooks/useData";

function AddTithe() {
  const { token } = useContext(AuthContext);

  const { data } = useData("http://localhost:1337/members");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={true} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar Diezmo</h3>
        <SubmitButton />
      </div>
      <div className="form-container p-6">
        <FormTithe data={data} />
      </div>
    </section>
  );
}

export default AddTithe;
