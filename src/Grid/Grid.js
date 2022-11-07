import Row from "./Row";

export default function Grid(props) {
  let [snakeCoords, gridVar, food, style] = [
    props.snakeCoords,
    props.gridVar,
    props.food,
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "5px solid #c8e84a",
    },
  ];

  let rowArray = gridVar.map((row, idx) => (
    <Row
      key={idx}
      rowVar={row}
      rowNum={idx}
      snakeCoords={snakeCoords}
      food={food}
    ></Row>
  ));

  return <div style={style}>{rowArray}</div>;
}
