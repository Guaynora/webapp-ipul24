import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormOffering from "../../components/form/FormOffering";
import TopComponent from "../../components/navTop/TopComponent";
import AuthContext from "../../context/AuthContext";

function AddOffering() {
  const { token } = useContext(AuthContext);

  const typesOffering = [ 
    {
      value: "jovenes",
      label: "Jóvenes"
    },
    {
      value: "dorcas",
      label: "Dorcas"
    },
    {
      value: "misiones",
      label: "Misiones"
    },
    {
      value: "gavilla",
      label: "Gavilla"
    },
    {
      value: "rayos_de_luz",
      label: "Rayos de luz"
    },
    {
      value: "semestral_jovenes",
      label: "Semestral jóvenes"
    },
    {
      value: "semestral_dorcas",
      label: "Semestral Dorcas"
    }
  ] 

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={true} />

      <FormOffering data={typesOffering} />
    </section>
  );
}

export default AddOffering;
