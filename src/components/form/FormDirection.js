import useForm from "../../hooks/useForm";
import LoadingButton from "../button/LoadingButton";
import Message from "../Message";
import SubmitButton from "../button/SubmitButton";

const initialForm = {
  directionName: "",
};

function FormDirection() {
  const { loading, response, handleChange, handleSubmit } = useForm(
    initialForm,
    "direction"
  );

  return (
    <form
      className="container-form"
      onSubmit={(e) => handleSubmit(e, "direction")}
    >
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar miembro</h3>
        {loading ? <LoadingButton /> : <SubmitButton />}
      </div>
      <div className="form-member form-container p-6">
        <div className="field">
          <label className="label">Dirección</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="directionName"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default FormDirection;
