import { makePixelGrid, pixelRows, gridStyle } from "./CellStyles";

const _ = require("underscore");

export default function Cell(props) {
  let [cellCoords, snake, food, hasFood, hasSnake] = [
    [props.rowNum, props.colNum],
    props.snake,
    props.food,
    false,
    false,
  ];

  let pixelGrid = makePixelGrid(
    pixelRows,
    snake,
    hasSnake,
    food,
    hasFood,
    cellCoords
  );

  return <div style={gridStyle}>{pixelGrid}</div>;
}
