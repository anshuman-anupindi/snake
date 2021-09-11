let [gridVar, snakeStartCondition] = [
  [],
  (j, k) => {
    return (j == 8 && k >= 4 && k <= 6) || (j == 7 && k == 6);
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

export default gridVar;
