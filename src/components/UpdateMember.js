import { useEffect } from "react";
import useDirections from "../hooks/useDirections";
import useForm from "../hooks/useForm";
import LoadingButton from "./button/LoadingButton";
import SubmitButton from "./button/SubmitButton";
import Message from "./Message";

function UpdateMember({ info }) {
  const initialForm = {
    name: "",
    lastname: "",
    dateofbird: "",
    identification: "",
    baptized: "",
    direction: {
      id: 6,
      directionName: "",
    },
  };

  const { form, loading, response, handleChange, handleUpdate, handleEdit } =
    useForm(initialForm, "member");

  const { directions } = useDirections();

  useEffect(() => {
    console.log("useEffect updateMember");
    handleEdit(info);
  }, [info]);

  return (
    <form
      className="container-form"
      onSubmit={(e) => handleUpdate(e, "member")}
    >
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Actualizar miembro</h3>
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
              value={form.name}
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
              value={form.lastname}
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
              value={form.identification}
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
              value={form.dateofbird}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Direccion</label>
          <div className="select">
            <select
              name="direction"
              onChange={handleChange}
              value={form.direction.id}
            >
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
          <div className="select">
            <select
              name="baptized"
              onChange={handleChange}
              value={form.baptized}
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
      </div>
      {response && <Message msg="Actualizado correctamente" />}
    </form>
  );
}

export default UpdateMember;
