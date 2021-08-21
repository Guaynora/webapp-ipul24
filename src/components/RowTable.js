import React from "react";

function RowTable({ member }) {
  const { name, lastname, identification, dateofbird, baptized, direction } =
    member;
  console.log(name);
  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{identification}</td>
      <td>{dateofbird}</td>
      {direction ? <td>{direction.directionName}</td> : <td>No registrado</td>}

      {baptized ? <td>Si</td> : <td>No</td>}
      <td>
        <span className="icon has-text-success mr-2">
          <i className="far fa-lg fa-edit"></i>
        </span>
        <span className="icon has-text-danger">
          <i className="far fa-lg fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}
export default RowTable;
