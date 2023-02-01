import {
  black,
  green,
  gridStyle,
  rowStyle,
  dummyPixelStyle,
  pixelRows,
} from "./StyleConstants";
const _ = require("underscore");

const cellState = (snake, hasSnake, food, hasFood, cellCoords) => {
  let [cellX, cellY] = [cellCoords[0], cellCoords[1]];
  let [foodX, foodY] = [food[0], food[1]];
  hasSnake = snake.some(([x, y]) => x == cellX && y == cellY);
  hasFood = foodX == cellY && foodY == cellY;
  return { hasSnake, hasFood };
};

const cellType = (snake, hasSnake, food, hasFood, cellCoords) => {
  let stateOfCell = cellState(snake, hasSnake, food, hasFood, cellCoords);
  if (stateOfCell.hasSnake) return "snake";
  if (stateOfCell.hasFood) return "food";
  return "background";
};

const cellTypeToColor = (type, rowNum, colNum) => {
  switch (type) {
    case "background":
      return green;
    case "food":
      let isDiagonal = (rowNum + colNum) % 2 == 0;
      return isDiagonal ? black : green;
    case "snake":
      return black;
  }
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
      {pixelRow.map((_arg, colNum) => {
        let pixelStyle = { ...dummyPixelStyle };
        const type = cellType(snake, hasSnake, food, hasFood, cellCoords);
        return (
          <div
            style={{
              ...pixelStyle,
              backgroundColor: cellTypeToColor(type, rowNum, colNum),
            }}
          ></div>
        );
      })}
    </div>
  ));
  return <div style={gridStyle}>{pixelGrid}</div>;
};

export { makePixelGrid, cellState, cellType, pixelRows, gridStyle };
