import useDirections from "../hooks/useDirections";
import useForm from "../hooks/useForm";
import LoadingButton from "./LoadingButton";
import Message from "./Message";
import SubmitButton from "./SubmitButton";

const initialForm = {
  name: "",
  lastname: "",
  dateofbird: "",
  identification: "",
  baptized: "",
  direction: "",
};

function FormMember() {
  const { form, loading, response, handleChange, handleSubmit } = useForm(
    initialForm,
    "member"
  );

  const { directions } = useDirections();

  return (
    <form
      className="container-form"
      onSubmit={(e) => handleSubmit(e, "member")}
    >
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar miembro</h3>
        {loading ? <LoadingButton /> : <SubmitButton />}
      </div>
      <div className="form-member form-container p-6">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="lastname"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Identificacion</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="8-100-000"
              name="identification"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Fecha de nacimiento</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="dateofbird"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Miembro</label>
          <div className="select">
            <select name="direction" onChange={handleChange}>
              {directions.map((el) => (
                <option
                  key={el.id}
                  value={el.id}
                >{`${el.directionName}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Bautizado</label>
          <div className="control">
            <label className="radio mr-5">
              <input
                type="radio"
                name="baptized"
                className="mr-2"
                value="true"
                onChange={handleChange}
              />
              Si
            </label>
            <label className="radio">
              <input
                type="radio"
                name="baptized"
                className="mr-2"
                value="false"
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default FormMember;
