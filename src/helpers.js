let [gridVar, snakeStartCondition] = [
  [],
  (j, k) => {
    return j == 8 && k >= 3 && k <= 6;
  },
];

for (let i = 0; i < 17; i++) {
  gridVar.push([]);
}
for (let j = 0; j < 17; j++) {
  for (let k = 0; k < 17; k++) {
    snakeStartCondition(j, k) ? gridVar[j].push(1) : gridVar[j].push(0);
  }
}

// const handleMovement = (e) => {
//   if (gameStarted) {
//     if (e.key == "ArrowUp") {
//       setHeadPosition([headPosition[0] - 1, headPosition[1]]);
//     } else if (e.key == "ArrowDown") {
//       setHeadPosition([headPosition[0] + 1, headPosition[1]]);
//     } else if (e.key == "ArrowRight") {
//       setHeadPosition([headPosition[0], headPosition[1] + 1]);
//     } else if (e.key == "ArrowLeft") {
//       setHeadPosition([headPosition[0], headPosition[1] - 1]);
//     }
//   }
// };

export default gridVar;
