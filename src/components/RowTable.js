import React from "react";

function RowTable({ member }) {
  const { name, lastname, identification, dateofbird, baptized } = member;
  console.log(name);
  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{identification}</td>
      <td>{dateofbird}</td>
      {baptized ? <td>Si</td> : <td>No</td>}
    </tr>
  );
}
export default RowTable;
