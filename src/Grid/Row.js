import Cell from "./Cell";

export default function Row(props) {
  let [style, snakeCoords, rowNum, rowVar, food] = [
    { display: "flex", flexDirection: "row" },
    props.snakeCoords,
    props.rowNum,
    props.rowVar,
    props.food,
  ];

  let cellArray = rowVar.map((cell, idx) => (
    <Cell
      key={idx}
      cellVar={cell}
      rowNum={rowNum}
      colNum={idx}
      snakeCoords={snakeCoords}
      food={food}
    ></Cell>
  ));

  return <div style={style}>{cellArray}</div>;
}
