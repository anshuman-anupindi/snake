import { useState } from "react";

export default function Cell(props) {
  let cellVar = props.cellVar;
  let [cellCoords, style] = [
    [props.rowNum, props.colNum],
    {
      width: "50px",
      height: "50px",
      backgroundColor: "grey",
      border: "1px solid black",
    },
  ];

  return (
    <div
      style={style}
      onClick={() => {
        console.log(cellCoords);
      }}
    >
      {cellVar}
    </div>
  );
}
