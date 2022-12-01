import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

function DeleteButton({ type, id }) {
  const { token } = useContext(AuthContext);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(false);

  const urls = {
    member: `${process.env.REACT_APP_APIURL}/members/${id}`,
    tithe: `${process.env.REACT_APP_APIURL}/tithes/${id}`,
    direction: `${process.env.REACT_APP_APIURL}/directions/${id}`,
    movement: `${process.env.REACT_APP_APIURL}/movements/${id}`,
    concepts: `${process.env.REACT_APP_APIURL}/concepts/${id}`,
  };

  const Delete = async (e) => {
    try {
      let res = await fetch(urls[type], {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (!res.ok) {
        throw new Error({
          err: true,
          status: res.status,
          statusText: !res.status.Text ? "ocurrio un error" : res.statusText,
        });
      }
      setResponse(true);
      return response;
    } catch (err) {
      console.log(err);
      setError(true);
      return error;
    }
  };

  return (
    <span className="icon has-text-danger" onClick={Delete}>
      <i className="far fa-lg fa-trash-alt"></i>
    </span>
  );
}

export default DeleteButton;
