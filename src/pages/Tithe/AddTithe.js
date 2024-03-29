import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormTithe from "../../components/form/FormTithe";
import SubmitButton from "../../components/button/SubmitButton";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import useData from "../../hooks/useData";

function AddTithe() {
  const { token } = useContext(AuthContext);

  const { data } = useData(`${process.env.REACT_APP_APIURL}/members`);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={true} />

      <FormTithe data={data} />
    </section>
  );
}

export default AddTithe;
