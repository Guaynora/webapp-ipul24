import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

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
        <td>{direction.directionName}</td>
        {baptized ? <td>Si</td> : <td>No</td>}
      </>
    );
  };

  const Tithe = () => {
    const { member, date, amount } = data;
    return (
      <>
        <td>{member.name}</td>
        <td>{member.lastname}</td>
        <td>{amount}</td>
        <td>{date}</td>
      </>
    );
  };

  const typeData = {
    member: <Member />,
    tithe: <Tithe />,
  };

  console.log(data);
  console.log(type);
  return (
    <tr>
      {typeData[type]}
      <td>
        <EditButton />
        <DeleteButton />
      </td>
    </tr>
  );
}
export default RowTable;
