import React from "react";
import { useHistory } from "react-router-dom";

function AddButton({ text }) {
  let history = useHistory();

  const textButton = {
    miembro: "Agregar miembro",
    ofrenda: "Agregar ofrenda",
    diezmo: "Agregar diezmo",
    movimiento: "Agregar Movimiento"
  };

  const pushUrl = {
    miembro: "/members/addmember",
    diezmo: "/tithes/addtithe",
    ofrenda: "/offering/addoffering",
    movimiento: "/movements/addmovement"
  };

  const handleClick = (e) => {
    history.push(pushUrl[text]);
  };
  return (
    <button className="button is-rounded is-info" onClick={handleClick}>
      {textButton[text]}
    </button>
  );
}

export default AddButton;
