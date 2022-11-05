import React from "react";
import { useHistory } from "react-router-dom";

function AddButton({ text }) {
  let history = useHistory();

  const textButton = {
    miembro: "Agregar miembro",
    diezmo: "Agregar diezmo",
    movimiento: "Agregar Movimiento",
    concepto: "Agregar Concepto"
  };

  const pushUrl = {
    miembro: "/members/addmember",
    diezmo: "/tithes/addtithe",
    movimiento: "/movements/addmovements",
    concepto: "/concepts/addconcepts"
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
