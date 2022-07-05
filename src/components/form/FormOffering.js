import SubmitButton from "../button/SubmitButton";
import LoadingButton from "../button/LoadingButton";
import useForm from "../../hooks/useForm";
import Message from "../Message";

const initialForm = {
  type: "",
  dateOffering: "",
  amountOffering: 0 
};

function FormOffering({ data }) {
  const { form, loading, response, handleChange, handleSubmit } = useForm(
    initialForm,
    "offering"
  );

  return (
    <form className="container-form" onSubmit={(e) => handleSubmit(e, "offering")}>
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar Ofrenda</h3>
        {loading ? <LoadingButton /> : <SubmitButton />}
      </div>
      <div className="form-member form-container p-6">
        <div className="field">
          <label className="label">Fecha</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="dateOffering"
              onChange={handleChange}
              value={form.dateOffering}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tipo</label>
          <div className="select">
            <select name="type" onChange={handleChange}>
              <option>Seleccione</option>
              {data.map((el, id) => (
                <option
                  key={id}
                  value={el.value}
                >{el.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Monto</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="amountOffering"
              onChange={handleChange}
              value={form.amountOffering}
            />
          </div>
        </div>
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default FormOffering;
