import SubmitButton from "../button/SubmitButton";
import LoadingButton from "../button/LoadingButton";
import useForm from "../../hooks/useForm";
import Message from "../Message";

const initialForm = {
  descrption: "",
  amount: 0 ,
  invoice: null,
  date: '',
};

function FormMovements({ data }) {
  const { form, loading, response, handleChange, handleSubmit } = useForm(
    initialForm,
    "offering"
  );

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e, "offering")}>
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
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default FormMovements;
