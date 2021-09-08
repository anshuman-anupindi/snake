import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import Row from "./Row";
import { useState } from "react";

function App() {
  let [gameStarted, setGameStart] = useState(false);
  let [headPosition, setHeadPosition] = useState([2, 8]);
  let [direction, setDirection] = useState("");
  let [headPositionArr, setHeadPositionArr] = useState([]);
  let [snakeLength, setSnakeLength] = useState(3);
  let [snakePositionArr, setSnakePositionArr] = useState([]);
  
  let gridVar = []
  for (let i = 0; i < 16; i++) {
    gridVar.push([])
  }
  for (let j = 0; j < 16; j++) {
    for (let k = 0; k < 16; k++) {
      gridVar[j].push([''])
    }
  }

  return (
    <div className="App" onKeyPress={() => setGameStart(true)}>
      <Grid
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
