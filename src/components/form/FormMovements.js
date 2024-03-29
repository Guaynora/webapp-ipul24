import SubmitButton from "../button/SubmitButton";
import LoadingButton from "../button/LoadingButton";
import useForm from "../../hooks/useForm";
import Message from "../Message";
import { useEffect, useState } from "react";

function FormMovements({ data }) {
  const [initialForm, setInitialForm] = useState({
    description: "",
    amount: 0,
    invoice: null,
    date: "",
    concept: "",
  });

  const { form, loading, response, handleChange, handleSubmit } = useForm(
    initialForm,
    "movement"
  );

  useEffect(() => {
    if (data.length > 0) {
      setInitialForm({ ...initialForm, concept: data[0].id });
    }
  }, [data]);

  return (
    <form
      className="container-form"
      onSubmit={(e) => handleSubmit(e, "movement")}
    >
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar Movimiento</h3>
        {loading ? <LoadingButton /> : <SubmitButton />}
      </div>
      <div className="form-member form-container p-6">
        <div className="field">
          <label className="label">Fecha</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="date"
              onChange={handleChange}
              value={form.date}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Monto</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="amount"
              onChange={handleChange}
              value={form.amount}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Factura</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="invoice"
              onChange={handleChange}
              value={form.invoice}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Concepto</label>
          <div className="select">
            <select name="concept" onChange={handleChange}>
              {data.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Descripción</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="description"
              onChange={handleChange}
              value={form.description}
            />
          </div>
        </div>
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default FormMovements;
