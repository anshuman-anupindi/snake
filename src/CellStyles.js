const _ = require("underscore");

// cell style objects

let [gridStyle, rowStyle] = [{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }]

const pixelRows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

// cell type to style functions

const checkCellHasSnakeAndFood = (snakeCoords, cellCoords, food, hasFood, hasSnake) => {
    snakeCoords.forEach((snakeCoord) => {
        if (_.isEqual(snakeCoord, cellCoords)) {
          hasSnake = true;
        }
      });
      if (_.isEqual(food, cellCoords)) hasFood = true;
    return {hasSnake: hasSnake, hasFood: hasFood};
}

const cellType = (hasSnake, hasFood) => {
    if (hasSnake) return "snake";
    else if (hasSnake && hasFood) return "snake";
    else if (!hasSnake && hasFood) return "food";
    else return "background";
  };

const cellTypeToStyle = (hasSnake, hasFood, rowNum, colNum, pixelColor, pixelStyle) => {
    if (cellType(hasSnake, hasFood) == "food") {
        let isDiagonal =
          rowNum == colNum ||
          _.isEqual([rowNum, colNum], [0, 2]) ||
          _.isEqual([rowNum, colNum], [2, 0]);
        if (isDiagonal) pixelColor = "#00062e";
        else pixelColor = "#c8e84a";
        pixelStyle["backgroundColor"] = pixelColor;
    } else if (cellType(hasSnake, hasFood) == "snake") {
        pixelColor = "#00062e";
        pixelStyle["backgroundColor"] = pixelColor;
    } else {
        pixelColor = "#c8e84a";
        pixelStyle["backgroundColor"] = pixelColor;
    }
}

const makePixelGrid = (pixelRows, cellTypeToStyle, rowStyle, hasSnake, hasFood) => pixelRows.map((pixelRow, rowNum) => {
    let [pixelColor, pixelStyle] = [
        null,
        {
          width: "5px",
          height: "5px",
          backgroundColor: "",
          border: "1px solid #c8e84a",
        },
      ];
    return (
        <div style={rowStyle}>
        {pixelRow.map((pixel, colNum) => {
            cellTypeToStyle(hasSnake, hasFood, rowNum, colNum, pixelColor, pixelStyle);
            return <div style={pixelStyle}></div>;
        })}
        </div>
    );
    });

export {checkCellHasSnakeAndFood, gridStyle, rowStyle, makePixelGrid, pixelRows, cellTypeToStyle}