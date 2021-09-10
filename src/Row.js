import Cell from "./Cell";

export default function Row(props) {
  let [style, headPosition, rowNum, rowVar] = [
    { display: "flex", flexDirection: "row" },
    props.headPosition,
    props.rowNum,
    props.rowVar,
  ];

  let cellArray = rowVar.map((cell, idx) => (
    <Cell cellVar={cell} rowNum={rowNum} colNum={idx}></Cell>
  ));

  return <div style={style}>{cellArray}</div>;
}
