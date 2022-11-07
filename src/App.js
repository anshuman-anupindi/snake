import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import { gridVar, moveSnake, innerDirectionHandler } from "./Game";
const _ = require("underscore");

function App() {
  let grid = gridVar;
  let speed = 200;

  // game states

  let [gameLost, setGameLost] = useState(false);

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

  // game loop

  useEffect(() => {
    if (gameLost) {
      alert(`You died! Your snake was ${snakeCoords.length} pieces long.`);
    } else {
      setTimeout(() => {
        moveSnake(
          snakeCoords,
          setSnakeCoords,
          food,
          setFood,
          currentDirection,
          setGameLost
        );
      }, speed);
    }
  }, [snakeCoords, gameLost]);

  const directionHandler = (e) =>
    innerDirectionHandler(e, currentDirection, setCurrentDirection);
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
