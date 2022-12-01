import React from "react";

function HeadTable({ type }) {
  const tableMember = [
    "Nombre",
    "Apellido",
    "Identificacion",
    "Nacimiento",
    "Direccion",
    "Bautizado",
    "Opción",
  ];

  const tableTithe = ["Nombre", "Apellido", "Monto", "Fecha", "Opcion"];

  const tableMovement = [
    "Tipo",
    "Concepto",
    "Monto",
    "Fecha",
    "Descripción",
    "Opción",
  ];

  const tableConcepts = ["Tipo", "Concepto", "Descripción", "Opción"];

  const tableDirections = ["Dirección", "Opción"];

  const TypeTable = {
    member: tableMember,
    tithe: tableTithe,
    movement: tableMovement,
    concepts: tableConcepts,
    direction: tableDirections,
  };

  return TypeTable[type].map((el, index) => <th key={index}>{el}</th>);
}

export default HeadTable;
