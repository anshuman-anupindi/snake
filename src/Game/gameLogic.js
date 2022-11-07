const _ = require("underscore");

// move constants to their own file

let [width, length] = [16, 28];
let gridVar = [];

for (let i = 0; i < width; i++) {
  gridVar.push([]);
}
for (let j = 0; j < width; j++) {
  for (let k = 0; k < length; k++) {
    gridVar[j].push("");
  }
}

const innerDirectionHandler = (e, currentDirection, setCurrentDirection) => {
  e = e || window.event;

  // add a default case
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

// think about creating a class out of these functions
function moveSnake(
  snakeCoords,
  setSnakeCoords,
  food,
  setFood,
  currentDirection,
  setGameLost
) {
  let [head, newSnake] = [
    snakeCoords[snakeCoords.length - 1],
    snakeCoords.slice(0),
  ];

  // add a default case
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
    makeRandomFood(setFood);
  } else {
    newSnake.shift();
  }

  if (
    !checkHasEatenItself(snakeCoords, setGameLost) &&
    checkInsideBorders(setGameLost, snakeCoords)
  ) {
    setSnakeCoords(newSnake);
  }
}

function checkInsideBorders(setGameLost, snakeCoords) {
  let head = snakeCoords[snakeCoords.length - 1];

  // use constants for width and height here
  if (head[0] < 0 || head[0] > 15 || head[1] > 27 || head[1] < 0) {
    setGameLost(true);
    return false;
  }
  return true;
}

function makeRandomFood(setFood) {
  setFood([Math.floor(Math.random() * 16), Math.floor(Math.random() * 28)]);
}

function checkHasEatenItself(snakeCoords, setGameLost) {
  let [snakeHead, snakeRest] = [
    snakeCoords[snakeCoords.length - 1],
    snakeCoords.slice(0, snakeCoords.length - 1),
  ];
  snakeRest.forEach((snakeCoord) => {
    if (_.isEqual(snakeCoord, snakeHead)) {
      setGameLost(true);
      return true;
    }
  });
  return false;
}

export {
  gridVar,
  checkHasEatenItself,
  checkInsideBorders,
  makeRandomFood,
  moveSnake,
  innerDirectionHandler,
};
