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

  const tableMovement = ["Tipo", "Concepto", "Monto", "Fecha", "Descripcion"]

  const tableConcepts = ["Tipo", "Concepto", "Descripción"]

  const TypeTable = {
    member: tableMember,
    tithe: tableTithe,
    movement: tableMovement,
    concepts: tableConcepts,
  };

  return TypeTable[type].map((el, index) => <th key={index}>{el}</th>);
}

export default HeadTable;
