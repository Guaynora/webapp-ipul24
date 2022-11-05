import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormConcepts from "../../components/form/FormConcepts";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";

const AddConcepts = () => {
  const { token } = useContext(AuthContext);

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
