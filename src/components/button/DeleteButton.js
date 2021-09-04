import React from "react";

function DeleteButton({ type }) {
  const urls = {
    member: "http://localhost:1337/members",
    tithe: "http://localhost:1337/tithes",
  };

  const Delete = (e) => {};

  return (
    <span className="icon has-text-danger" onClick={Delete}>
      <i className="far fa-lg fa-trash-alt"></i>
    </span>
  );
}

export default DeleteButton;
