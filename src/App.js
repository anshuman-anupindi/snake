import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import gridVar from "./helpers";

function App() {
  let [grid, setGrid] = useState(gridVar);
  let [gameLost, setGameLost] = useState(false);

  let [currentDirection, setCurrentDirection] = useState("r");

  let [headPosition, setHeadPosition] = useState([7, 6]);
  let [headlessSnakePositionArr, setHeadlessSnakePositionArr] = useState([
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
  ]);
  let [randomFood, setRandomFood] = useState([
    Math.floor(Math.random() * 17),
    Math.floor(Math.random() * 17),
  ]);
  let [isFoodEaten, setIsFoodEaten] = useState(false);

  function handleHeadlessMovement() {
    let newHeadlessArr = headlessSnakePositionArr.slice(0);
    newHeadlessArr.shift();
    newHeadlessArr.push(headPosition);
    setHeadlessSnakePositionArr(newHeadlessArr);
  }

  function handleHeadMovement(headPosition) {
    let [headRowNum, headColNum, newHeadPosition] = [
      headPosition[0],
      headPosition[1],
      headPosition,
    ];
    if (currentDirection == "r") {
      newHeadPosition = [headRowNum, headColNum + 1];
    } else if (currentDirection == "l") {
      newHeadPosition = [headRowNum, headColNum - 1];
    } else if (currentDirection == "d") {
      newHeadPosition = [headRowNum + 1, headColNum];
    } else if (currentDirection == "u") {
      newHeadPosition = [headRowNum - 1, headColNum];
    }

    setHeadPosition(newHeadPosition);
  }

  function moveSnake() {
    let [headRowNum, headColNum] = [headPosition[0], headPosition[1]];
    let [newGrid, doesSnakeLive, doesSnakeDie] = [
      grid.slice(0),
      headRowNum > 0 && headRowNum < 17 && headColNum > 0 && headColNum < 17,
      headRowNum == 0 ||
        headRowNum == 17 ||
        headColNum == 0 ||
        headColNum == 17,
    ];

    if (doesSnakeLive) {
      handleHeadMovement(headPosition);
      let snakeCoordArr = headlessSnakePositionArr.concat([headPosition]);

      snakeCoordArr.forEach((snakeCoord, idx) => {
        let [[x, y], isTail] = [snakeCoord, idx == 0];
        if (isTail) {
          newGrid[x][y] = 0;
        } else {
          newGrid[x][y] = 1;
        }
      });

      handleHeadlessMovement();
      setGrid(newGrid);
    } else if (doesSnakeDie) {
      setGameLost(true);
    }
  }

  const directionChanger = (e) => {
    let [newDirection, arrowObject] = [
      e.key,
      { ArrowRight: "r", ArrowLeft: "l", ArrowDown: "d", ArrowUp: "u" },
    ];
    console.log("direction change working");
    setCurrentDirection(arrowObject[newDirection]);
  };

  useEffect(() => setTimeout(moveSnake, 1000), [grid]);
  useEffect(() => alert("You died!"), [gameLost]);

  return (
    <div className="App" onKeyPress={(e) => directionChanger(e)}>
      <Grid
        gridVar={grid}
        headPosition={headPosition}
        setHeadPosition={setHeadPosition}
        currentDirection={currentDirection}
        setCurrentDirection={setCurrentDirection}
      />
    </div>
  );
}

export default App;
