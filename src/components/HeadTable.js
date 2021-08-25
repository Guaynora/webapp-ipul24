import React from "react";

function HeadTable({ type }) {
  const tableMember = [
    "Nombre",
    "Apellido",
    "Identificacion",
    "Nacimiento",
    "Direccion",
    "Bautizado",
    "Opcion",
  ];

  const tableTithe = ["Nombre", "Apellido", "Monto", "Fecha", "Opcion"];

  const TypeTable = {
    member: tableMember,
    tithe: tableTithe,
  };

  return TypeTable[type].map((el) => <th key={el.id}>{el}</th>);
}

export default HeadTable;
