import { useHistory } from "react-router-dom";

function EditButton({ type, id }) {
  let history = useHistory();

  const Update = (e) => {
    history.push(`/${type}s/${id}`);
  };
  return (
    <span className="icon has-text-success mr-2" onClick={Update}>
      <i className="far fa-lg fa-edit"></i>
    </span>
  );
}

export default EditButton;
