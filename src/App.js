import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import gridVar from "./helpers";
const _ = require("underscore");

function App() {
  let grid = gridVar;
  let [gameLost, setGameLost] = useState(false);
  let speed = 100;

  let [currentDirection, setCurrentDirection] = useState("r");

  let [snakeCoords, setSnakeCoords] = useState([
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
  ]);
  let [food, setFood] = useState([
    Math.floor(Math.random() * 16),
    Math.floor(Math.random() * 28),
  ]);

  const directionHandler = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        if (currentDirection != "d") setCurrentDirection("u");
        break;
      case 40:
        if (currentDirection != "u") setCurrentDirection("d");
        break;
      case 37:
        if (currentDirection != "r") setCurrentDirection("l");
        break;
      case 39:
        if (currentDirection != "l") setCurrentDirection("r");
        break;
    }
  };

  function moveSnake() {
    let [head, newSnake] = [
      snakeCoords[snakeCoords.length - 1],
      snakeCoords.slice(0),
    ];
    switch (currentDirection) {
      case "r":
        head = [head[0], head[1] + 1];
        break;
      case "d":
        head = [head[0] + 1, head[1]];
        break;
      case "l":
        head = [head[0], head[1] - 1];
        break;
      case "u":
        head = [head[0] - 1, head[1]];
        break;
    }
    newSnake.push(head);
    if (_.isEqual(food, head)) {
      makeRandomFood();
    } else {
      newSnake.shift();
    }
    checkInsideBorders();
    checkHasEatenItself();

    if (!gameLost) {
      setSnakeCoords(newSnake);
    }
  }

  function checkInsideBorders() {
    let head = snakeCoords[snakeCoords.length - 1];
    if (head[0] == -1 || head[0] == 16 || head[1] == 28 || head[1] == -1)
      setGameLost(true);
  }

  function makeRandomFood() {
    setFood([Math.floor(Math.random() * 16), Math.floor(Math.random() * 28)]);
  }

  function checkHasEatenItself() {
    let [snakeHead, snakeRest] = [
      snakeCoords[snakeCoords.length - 1],
      snakeCoords.slice(0, snakeCoords.length - 1),
    ];
    snakeRest.forEach((snakeCoord) => {
      if (_.isEqual(snakeCoord, snakeHead)) {
        setGameLost(true);
      }
    });
  }

  useEffect(() => {
    console.log(gameLost);
    if (gameLost) {
      alert(`You died! Your snake was ${snakeCoords.length} pieces long.`);
    } else {
      setTimeout(moveSnake, speed);
    }
  }, [snakeCoords]);

  document.addEventListener("keydown", directionHandler);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        className="App"
        gridVar={grid}
        snakeCoords={snakeCoords}
        currentDirection={currentDirection}
        setCurrentDirection={setCurrentDirection}
        food={food}
      />
    </div>
  );
}

export default App;
