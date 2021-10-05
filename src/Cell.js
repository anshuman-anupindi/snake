import { useState } from "react";

export default function Cell(props) {
  let [cellCoords, snakeCoords, hasSnake, hasFood, food] = [
    [props.rowNum, props.colNum],
    props.snakeCoords,
    false,
    false,
    props.food,
  ];

  snakeCoords.forEach((snakeCoord) => {
    if (snakeCoord[0] == cellCoords[0] && snakeCoord[1] == cellCoords[1]) {
      hasSnake = true;
    }
  });

  if (food[0] == cellCoords[0] && food[1] == cellCoords[1]) hasFood = true;

  const colorHandler = () => {
    if (hasSnake) return "green";
    else if (hasSnake && hasFood) return "green";
    else if (!hasSnake && hasFood) return "red";
    else return "grey";
  };

  let style = {
    width: "50px",
    height: "50px",
    backgroundColor: `${colorHandler()}`,
    border: "1px solid black",
  };

  return (
    <div
      style={style}
      onClick={() => {
        console.log(cellCoords);
        console.log(hasSnake);
      }}
    ></div>
  );
}
