import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormConcepts from "../../components/form/FormConcepts";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";
import useData from "../../hooks/useData";

const AddConcepts = () => {
  const { token } = useContext(AuthContext);

  const { data } = useData("http://localhost:1337/movements");

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <section className="container">
      <TopComponent back={true} />
      <FormConcepts />
    </section>
  );
};

export default AddConcepts;
