import {checkCellHasSnakeAndFood, gridStyle, rowStyle, makePixelGrid, pixelRows, cellTypeToStyle} from "./CellStyles"
const _ = require("underscore");

export default function Cell(props) {
  let [cellCoords, snakeCoords, food, hasFood, hasSnake] = [
    [props.rowNum, props.colNum],
    props.snakeCoords,
    props.food,
    false,
    false
  ];
  let typeOfCell = checkCellHasSnakeAndFood(snakeCoords, cellCoords, food, hasFood, hasSnake);


  [hasSnake, hasFood] = [typeOfCell.hasSnake, typeOfCell.hasFood]

  
  let pixelGrid = makePixelGrid(pixelRows, cellTypeToStyle, rowStyle, hasSnake, hasFood)

  return <div style={gridStyle}>{pixelGrid}</div>;
}
