import React from "react";
import FormMember from "../components/FormMember";
import TopComponent from "../components/TopComponent";

function AddMember() {
  return (
    <section className="container">
      <TopComponent back={true} />
      <h3 className="title is-4 mx-6 mt-4">Agregar miembro</h3>
      <div className="form-container p-6">
        <FormMember />
      </div>
    </section>
  );
}

export default AddMember;
