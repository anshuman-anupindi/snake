import Row from "./Row";

export default function Grid(props) {
  let [headPosition, setHeadPosition, gameStarted] = [
    props.headPosition,
    props.setHeadPosition,
    props.gameStarted,
  ];

  const handleMovement = (e) => {
    if (gameStarted) {
      if (e.key == "ArrowUp") {
        setHeadPosition([headPosition[0] - 1, headPosition[1]]);
      } else if (e.key == "ArrowDown") {
        setHeadPosition([headPosition[0] + 1, headPosition[1]]);
      } else if (e.key == "ArrowRight") {
        setHeadPosition([headPosition[0], headPosition[1] + 1]);
      } else if (e.key == "ArrowLeft") {
        setHeadPosition([headPosition[0], headPosition[1] - 1]);
      }
    }
  };
  let [rowArray, style] = [
    [],
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  ];

  for (let i = 0; i < 16; i++) {
    rowArray.push(
      <Row
        className={`row${i + 1}`}
        data-has-snake={headPosition[0] == i}
      ></Row>
    );
  }

  return (
    <div style={style} onKeyPress={handleMovement}>
      {rowArray}
    </div>
  );
}
