const _ = require("underscore");

export default function Cell(props) {
  let [cellCoords, snakeCoords, food, hasFood, hasSnake] = [
    [props.rowNum, props.colNum],
    props.snakeCoords,
    props.food,
    false,
    false,
  ];

  let pixelRows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  snakeCoords.forEach((snakeCoord) => {
    if (_.isEqual(snakeCoord, cellCoords)) {
      hasSnake = true;
    }
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

  let pixelGrid = pixelRows.map((pixelRow, rowNum) => {
    return (
      <div style={rowStyle}>
        {pixelRow.map((pixel, colNum) => {
          let [pixelColor, pixelStyle] = [
            null,
            {
              width: "5px",
              height: "5px",
              backgroundColor: "",
              border: "1px solid #c8e84a",
            },
          ];

          if (cellType() == "food") {
            let isDiagonal =
              rowNum == colNum ||
              _.isEqual([rowNum, colNum], [0, 2]) ||
              _.isEqual([rowNum, colNum], [2, 0]);
            if (isDiagonal) pixelColor = "#00062e";
            else pixelColor = "#c8e84a";
            pixelStyle["backgroundColor"] = pixelColor;
          } else if (cellType() == "snake") {
            pixelColor = "#00062e";
            pixelStyle["backgroundColor"] = pixelColor;
          } else {
            pixelColor = "#c8e84a";
            pixelStyle["backgroundColor"] = pixelColor;
          }
          return <div style={pixelStyle}></div>;
        })}
      </div>
    );
  });

  return <div style={gridStyle}>{pixelGrid}</div>;
}
