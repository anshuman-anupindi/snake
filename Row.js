import Cell from "./Cell";

export default function Row(props) {
  let [cellArray, style, headPosition, rowNum,] = [
    [],
    { display: "flex", flexDirection: "row" },
    props.headPosition,
    props.className,
  ];

  for (let i = 0; i < 16; i++) {
    cellArray.push(
      <Cell
        className={`${rowNum} col${i + 1}`}
        data-has-snake={hasSnake && headPosition[1] == i}
      ></Cell>
    );
  }

  return <div style={style}>{cellArray}</div>;
}
