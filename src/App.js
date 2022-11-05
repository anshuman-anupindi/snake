import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import Scores from "./Scores";
import { useEffect, useState } from "react";
import grid from "./helpers";
const _ = require("underscore");

function App() {
  let [gameLost, setGameLost] = useState(false);
  let speed = 100;

  let [currentDirection, setCurrentDirection] = useState("r");

  let [snake, setSnake] = useState([
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
  ]);
  let [food, setFood] = useState([
    Math.floor(Math.random() * 16),
    Math.floor(Math.random() * 28),
  ]);
  let [scores, setScores] = useState([]);

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

  function checkInsideBorders() {
    let head = snake[snake.length - 1];
    if (head[0] == -1 || head[0] == 16 || head[1] == 28 || head[1] == -1)
      setGameLost(true);
  }

  function makeRandomFood() {
    setFood([Math.floor(Math.random() * 16), Math.floor(Math.random() * 28)]);
  }

  function checkHasEatenItself() {
    let [snakeHead, snakeRest] = [
      snake[snake.length - 1],
      snake.slice(0, snake.length - 1),
    ];
    snakeRest.forEach((snakeCoord) => {
      if (_.isEqual(snakeCoord, snakeHead)) {
        setGameLost(true);
      }
    });
  }

  function moveSnake() {
    let [head, newSnake] = [snake[snake.length - 1], snake.slice(0)];
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
    if (_.isEqual(food, head)) makeRandomFood();
    else newSnake.shift();
    checkInsideBorders();
    checkHasEatenItself();

    if (!gameLost) setSnake(newSnake);
  }

  function resetGame() {
    if (gameLost) {
      setGameLost(false);
      setSnake([
        [8, 3],
        [8, 4],
        [8, 5],
        [8, 6],
      ]);
      setCurrentDirection("r");
      makeRandomFood();
      document.removeEventListener("keydown", resetGame);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", resetGame);
  }, [scores]);

  useEffect(() => {
    if (gameLost) {
      setScores([...scores, snake.length * 10]);
    } else {
      setTimeout(moveSnake, speed);
    }
  }, [snake]);

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
      <header>Nokia's Snake</header>
      <Grid
        grid={grid}
        snake={snake}
        currentDirection={currentDirection}
        setCurrentDirection={setCurrentDirection}
        food={food}
      />
      <Scores snake={snake} scores={scores} />
      <image src="nokia.png" />
    </div>
  );
}

export default App;
