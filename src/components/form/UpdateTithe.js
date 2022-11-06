import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import Message from "../Message";
import SubmitButton from "../button/SubmitButton";
import LoadingButton from "../button/LoadingButton";
import useData from "../../hooks/useData";

const initialForm = {
  member: "",
  date: "",
  amount: "",
};

function UpdateTithe({ info }) {
  const { form, loading, response, handleChange, handleEdit, handleUpdate } =
    useForm(initialForm, "tithe");

  const { data } = useData(`${process.env.REACT_APP_APIURL}/members`);

  useEffect(() => {
    handleEdit(info);
  }, [info]);

  return (
    <form className="container-form" onSubmit={(e) => handleUpdate(e, "tithe")}>
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar Diezmo</h3>
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
          <label className="label">Miembro</label>
          <div className="select">
            <select
              name="member"
              onChange={handleChange}
              value={form.member.id}
            >
              <option>Desconocido</option>
              {data.map((el) => (
                <option
                  key={el.id}
                  value={el.id}
                >{`${el.name} ${el.lastname}`}</option>
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
              name="amount"
              onChange={handleChange}
              value={form.amount}
            />
          </div>
        </div>
      </div>
      {response && <Message msg="Agregado correctamente" />}
    </form>
  );
}

export default UpdateTithe;
