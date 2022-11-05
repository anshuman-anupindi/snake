import Row from "./Row";

export default function Grid(props) {
  let [snake, grid, food, style] = [
    props.snake,
    props.grid,
    props.food,
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "5px solid #00062e",
    },
  ];

  let rowArray = grid.map((row, idx) => (
    <Row row={row} rowNum={idx} snake={snake} food={food}></Row>
  ));

  return <div style={style}>{rowArray}</div>;
}
