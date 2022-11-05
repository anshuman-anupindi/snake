const _ = require("underscore");

export default function Cell(props) {
  let [cellCoords, snake, food, hasFood, hasSnake] = [
    [props.rowNum, props.colNum],
    props.snake,
    props.food,
    false,
    false,
  ];

  let pixelRows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  snake.forEach((snakeCoord) => {
    if (_.isEqual(snakeCoord, cellCoords)) hasSnake = true;
  });

  if (_.isEqual(food, cellCoords)) hasFood = true;

  const cellType = () => {
    if (hasSnake) return "snake";
    else if (hasSnake && hasFood) return "snake";
    else if (!hasSnake && hasFood) return "food";
    else return "background";
  };

  let gridStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  let rowStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  let pixelGrid = pixelRows.map((pixelRow, rowNum) => (
    <div style={rowStyle}>
      {pixelRow.map((pixel, colNum) => {
        let [pixelColor, pixelStyle] = [
          null,
          {
            width: "10px",
            height: "10px",
            backgroundColor: "",
            border: "1px solid #32a852",
          },
        ];

        if (cellType() == "food") {
          let isDiagonal =
            rowNum == colNum ||
            _.isEqual([rowNum, colNum], [0, 2]) ||
            _.isEqual([rowNum, colNum], [2, 0]);
          if (isDiagonal) pixelColor = "#00062e";
          else pixelColor = "#32a852";
          pixelStyle["backgroundColor"] = pixelColor;
        } else if (cellType() == "snake") {
          pixelColor = "#00062e";
          pixelStyle["backgroundColor"] = pixelColor;
        } else {
          pixelColor = "#32a852";
          pixelStyle["backgroundColor"] = pixelColor;
        }
        return <div style={pixelStyle}></div>;
      })}
    </div>
  ));
  return <div style={gridStyle}>{pixelGrid}</div>;
}
