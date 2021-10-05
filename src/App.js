import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import gridVar from "./helpers";

function App() {
  let grid = gridVar;
  let [gameLost, setGameLost] = useState(false);
  let speed = 500;

  let [currentDirection, setCurrentDirection] = useState("r");

  let [snakeCoords, setSnakeCoords] = useState([
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
    [7, 6],
  ]);
  let [food, setFood] = useState([
    Math.floor(Math.random() * 17),
    Math.floor(Math.random() * 17),
  ]);

  const directionHandler = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setCurrentDirection("u");
        break;
      case 40:
        setCurrentDirection("d");
        break;
      case 37:
        setCurrentDirection("l");
        break;
      case 39:
        setCurrentDirection("r");
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
    if (head[0] == food[0] && head[1] == food[1]) {
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
    if (head[0] == -1 || head[0] == 17 || head[1] == 17 || head[1] == -1)
      setGameLost(true);
  }

  function makeRandomFood() {
    setFood([Math.floor(Math.random() * 17), Math.floor(Math.random() * 17)]);
  }

  function checkHasEatenItself() {
    let [snakeHead, snakeRest] = [
      snakeCoords[snakeCoords.length - 1],
      snakeCoords.slice(0, snakeCoords.length - 1),
    ];
    snakeRest.forEach((snakeCoord) => {
      if (snakeCoord[0] == snakeHead[0] && snakeCoord[1] == snakeHead[1]) {
        setGameLost(true);
      }
    });
  }

  useEffect(() => {
    if (gameLost) {
      alert(`You died! Your snake was ${snakeCoords.length} pieces long.`);
      speed = 0;
    } else {
      setTimeout(moveSnake, speed);
    }
  }, [snakeCoords]);

  return (
    <div
      className="App"
      onKeyDown={(e) => directionHandler(e)}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Grid
        className="App"
        gridVar={grid}
        snakeCoords={snakeCoords}
        currentDirection={currentDirection}
        setCurrentDirection={setCurrentDirection}
        food={food}
        onKeyDown={(e) => directionHandler(e)}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => setCurrentDirection("u")}
          disabled={currentDirection == "d"}
        >
          Up
        </button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={() => setCurrentDirection("l")}
            disabled={currentDirection == "r"}
          >
            Left
          </button>
          <button
            onClick={() => setCurrentDirection("d")}
            disabled={currentDirection == "u"}
          >
            Down
          </button>
          <button
            onClick={() => setCurrentDirection("r")}
            disabled={currentDirection == "l"}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
