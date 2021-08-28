import React from "react";

function FormTithe({ data }) {
  const form = (e) => {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <form className="container-form" onSubmit={form}>
      <div className="form-member">
        <div className="field">
          <label className="label">Fecha</label>
          <div className="control">
            <input className="input" type="date" />
          </div>
        </div>
        <div className="field">
          <label className="label">Miembro</label>
          <div class="select">
            <select>
              <option>Desconocido</option>
              {data.map((el) => (
                <option key={el.id}>{`${el.name} ${el.lastname}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Monto</label>
          <div className="control">
            <input className="input" type="number" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormTithe;
