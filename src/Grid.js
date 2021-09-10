import Row from "./Row";

export default function Grid(props) {
  let [headPosition, setHeadPosition, gameStarted, gridVar, style] = [
    props.headPosition,
    props.setHeadPosition,
    props.gameStarted,
    props.gridVar,
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  ];

  let rowArray = gridVar.map((row, idx) => (
    <Row rowVar={row} rowNum={idx}></Row>
  ));

  return <div style={style}>{rowArray}</div>;
}
