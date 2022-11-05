import SubmitButton from "../button/SubmitButton";
import LoadingButton from "../button/LoadingButton";
import useForm from "../../hooks/useForm";
import Message from "../Message";

const initialForm = {
  type: "salida",
  title: null,
  description: null,
};

function FormConcepts() {
  const { form, loading, response, handleChange, handleSubmit } = useForm(
    initialForm,
    "offering"
  );

  return (
    <form
      className="container-form"
      onSubmit={(e) => handleSubmit(e, "concept")}
    >
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar Concepto</h3>
        {loading ? <LoadingButton /> : <SubmitButton />}
      </div>
      <div className="form-member form-container p-6">
        <div className="field">
          <label className="label">Tipo</label>
          <div className="select">
            <select name="type" onChange={handleChange}>
              <option value="salida">Salida</option>
              <option value="entrada">Entrada</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="title"
              onChange={handleChange}
              value={form.title}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">descripción</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="description"
              onChange={handleChange}
              value={form.desription}
            />
          </div>
        </div>
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default FormConcepts;
