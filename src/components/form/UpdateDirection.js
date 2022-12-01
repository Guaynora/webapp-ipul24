import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import LoadingButton from "../button/LoadingButton";
import SubmitButton from "../button/SubmitButton";
import Message from "../Message";

function UpdateDirection({ info }) {
  const initialForm = {
    directionName: "",
  };

  const { form, loading, response, handleChange, handleUpdate, handleEdit } =
    useForm(initialForm, "direction");

  useEffect(() => {
    handleEdit(info);
  }, [info]);

  return (
    <form
      className="container-form"
      onSubmit={(e) => handleUpdate(e, "direction")}
    >
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Actualizar dirección</h3>
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
              value={form.directionName}
            />
          </div>
        </div>
      </div>
      {response && <Message msg="Actualizado correctamente" />}
    </form>
  );
}

export default UpdateDirection;
