import { useHistory } from "react-router-dom";

function EditButton({ type, data }) {
  let history = useHistory();
  const urls = {
    member: `/member/${data.id}`,
    tithe: `/tithe/${data.id}`,
  };

  const Update = (e) => {
    history.push(urls[type]);
  };
  return (
    <span className="icon has-text-success mr-2" onClick={Update}>
      <i className="far fa-lg fa-edit"></i>
    </span>
  );
}

export default EditButton;
