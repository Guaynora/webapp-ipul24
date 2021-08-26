import React from "react";
import FormMember from "../components/FormMember";
import SubmitButton from "../components/SubmitButton";
import TopComponent from "../components/TopComponent";

function AddMember() {
  return (
    <section className="container">
      <TopComponent back={true} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar miembro</h3>
        <SubmitButton />
      </div>
      <div className="form-container p-6">
        <FormMember />
      </div>
    </section>
  );
}

export default AddMember;
