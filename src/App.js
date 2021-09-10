import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import gridVar from "./helpers";

function App() {
  let [gameStarted, setGameStart] = useState(false);
  let [headPosition, setHeadPosition] = useState([8, 6]);
  let [direction, setDirection] = useState("r");
  let [headPositionArr, setHeadPositionArr] = useState([]);
  let [snakeLength, setSnakeLength] = useState(4);
  let [snakePositionArr, setSnakePositionArr] = useState([]);

  // maybe use a matrix for easy column + row mutation?

  let [grid, setGrid] = useState(gridVar);

  function moveSnake() {
    let newGrid = grid.slice(0);
    let [headRowNum, headColNum] = [headPosition[0], headPosition[1]];

    let newRow = newGrid[headRowNum].slice(0);
    let newCol = grid.map((row) => row[headRowNum]);

    if (headRowNum < 16 && headColNum < 16) {
      // moving right
      if (direction == "r") {
        newRow.splice(headColNum + 1, 1, 1);
        newRow.splice(headColNum - snakeLength + 1, 1, 0);

        newGrid.splice(headRowNum, 1, newRow);

        setHeadPosition([headRowNum, headColNum + 1]);
        setGrid(newGrid);
      } else if (direction == "u") {
      }
    }
  }

  useEffect(() => setTimeout(moveSnake, 1000), [grid]);

  return (
    <div className="App">
      <Grid
        gridVar={grid}
        gameStarted={gameStarted}
        setGameStart={setGameStart}
        headPosition={headPosition}
        setHeadPosition={setHeadPosition}
        direction={direction}
        setDirection={setDirection}
        headPositionArr={headPositionArr}
        setHeadPositionArr={setHeadPositionArr}
        snakeLength={snakeLength}
        setSnakeLength={setSnakeLength}
      />
    </div>
  );
}

export default App;
