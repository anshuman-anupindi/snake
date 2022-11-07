import {
  checkCellHasSnakeAndFood,
  gridStyle,
  rowStyle,
  makePixelGrid,
  pixelRows,
  cellTypeToStyle,
  cellTypeToPixelGrid,
} from "./CellStyles";
const _ = require("underscore");

// create different cell components for each type - something like BaseCell, FoodCell, SnakeCell etc...
export default function Cell(props) {
  let [cellCoords, snakeCoords, food, hasFood, hasSnake] = [
    [props.rowNum, props.colNum],
    props.snakeCoords,
    props.food,
    false,
    false,
  ];

  // figure out how to move this logic to the grid level instead
  let typeOfCell = checkCellHasSnakeAndFood(
    snakeCoords,
    cellCoords,
    food,
    hasFood,
    hasSnake
  );

  [hasSnake, hasFood] = [typeOfCell.hasSnake, typeOfCell.hasFood];

  let pixelGrid = cellTypeToPixelGrid(
    pixelRows,
    cellTypeToStyle,
    rowStyle,
    hasSnake,
    hasFood
  );

  return <div style={gridStyle}>{pixelGrid}</div>;
}
