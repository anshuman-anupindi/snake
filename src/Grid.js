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
    },
  ];

  let rowArray = gridVar.map((row, idx) => (
    <Row rowVar={row} rowNum={idx} snakeCoords={snakeCoords} food={food}></Row>
  ));

  return <div style={style}>{rowArray}</div>;
}
