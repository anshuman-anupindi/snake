// move below into a style constants file - include gridStyle, rowStyle, black, green,
// and the function in makePixelGrid declaring and assigning pixelColor and pixelStyle
const _ = require("underscore");

const black = "#00062e";
const green = "#32a852";

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

let dummyPixelStyle = {
  width: "10px",
  height: "10px",
  backgroundColor: "",
  border: "1px solid #32a852",
};

let pixelRows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const cellState = (snake, hasSnake, food, hasFood, cellCoords) => {
  snake.forEach((snakeCoord) => {
    if (_.isEqual(snakeCoord, cellCoords)) hasSnake = true;
  });
  if (_.isEqual(food, cellCoords)) hasFood = true;
  return { hasSnake: hasSnake, hasFood: hasFood };
};

const cellType = (snake, hasSnake, food, hasFood, cellCoords) => {
  let stateOfCell = cellState(snake, hasSnake, food, hasFood, cellCoords);
  if (stateOfCell.hasSnake) return "snake";
  else if (stateOfCell.hasSnake && stateOfCell.hasFood) return "snake";
  else if (!stateOfCell.hasSnake && stateOfCell.hasFood) return "food";
  else return "background";
};

const makePixelGrid = (
  pixelRows,
  snake,
  hasSnake,
  food,
  hasFood,
  cellCoords
) => {
  let pixelGrid = pixelRows.map((pixelRow, rowNum) => (
    <div style={rowStyle}>
      {pixelRow.map((pixel, colNum) => {
        let pixelStyle = { ...dummyPixelStyle };
        const type = cellType(snake, hasSnake, food, hasFood, cellCoords);
        switch (type) {
          case "background":
            pixelStyle.backgroundColor = green;
            break;
          case "food":
            let isDiagonal = (rowNum + colNum) % 2 == 0;
            pixelStyle.backgroundColor = isDiagonal ? black : green;
            break;
          case "snake":
            pixelStyle.backgroundColor = black;
            break;
        }
        return <div style={pixelStyle}></div>;
      })}
    </div>
  ));
  return <div style={gridStyle}>{pixelGrid}</div>;
};

export { makePixelGrid, cellState, cellType, pixelRows, gridStyle };
