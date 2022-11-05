import Cell from "./Cell";

export default function Row(props) {
  let [style, snake, rowNum, row, food] = [
    { display: "flex", flexDirection: "row" },
    props.snake,
    props.rowNum,
    props.row,
    props.food,
  ];

  let cellArray = row.map((cell, idx) => (
    <Cell rowNum={rowNum} colNum={idx} snake={snake} food={food}></Cell>
  ));

  return <div style={style}>{cellArray}</div>;
}
