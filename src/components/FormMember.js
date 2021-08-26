import React from "react";
import SubmitButton from "./SubmitButton";

function FormMember() {
  const form = (e) => {
    e.preventDefault();
    console.log("enviado");
  };
  return (
    <form className="container-form" onSubmit={form}>
      <div className="form-member">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input className="input" type="text" placeholder="ejemplo" />
          </div>
        </div>
        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input className="input" type="text" placeholder="ejemplo" />
          </div>
        </div>
        <div className="field">
          <label className="label">Identificacion</label>
          <div className="control">
            <input className="input" type="text" placeholder="8-100-000" />
          </div>
        </div>
        <div className="field">
          <label className="label">Fecha de nacimiento</label>
          <div className="control">
            <input className="input" type="date" />
          </div>
        </div>
        <div className="field">
          <label className="label">Direccion</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Bautizado</label>
          <div className="control">
            <label className="radio mr-5">
              <input type="radio" name="answer" className="mr-2" />
              Si
            </label>
            <label className="radio">
              <input type="radio" name="answer" className="mr-2" />
              No
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormMember;
