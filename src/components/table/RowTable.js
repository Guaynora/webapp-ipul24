import React from "react";
import DeleteButton from "../button/DeleteButton";
import EditButton from "../button/EditButton";

function RowTable({ data, type }) {
  const Member = () => {
    const { name, lastname, identification, dateofbird, baptized, direction } =
      data;
    return (
      <>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{identification}</td>
        <td>{dateofbird}</td>
        {direction && <td>{direction.directionName}</td>}
        {baptized ? <td>Si</td> : <td>No</td>}
      </>
    );
  };

  const Tithe = () => {
    const { member, date, amount } = data;
    return (
      <>
        <td>{member?.name || "Desconocido"}</td>
        <td>{member?.lastname || "Desconocido"}</td>
        <td>{amount}</td>
        <td>{date}</td>
      </>
    );
  };

  const typeData = {
    member: <Member />,
    tithe: <Tithe />,
  };

  return (
    <tr>
      {typeData[type]}
      <td>
        <EditButton type={type} id={data.id} />
        <DeleteButton type={type} id={data.id} />
      </td>
    </tr>
  );
}
export default RowTable;
