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
  const tableOffering = ["Tipo", "Monto", "Fecha", "Opcion"]
  const TypeTable = {
    member: tableMember,
    tithe: tableTithe,
    offering: tableOffering,
  };

  return TypeTable[type].map((el, index) => <th key={index}>{el}</th>);
}

export default HeadTable;
