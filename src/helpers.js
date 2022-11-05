let grid = [];

for (let i = 0; i < 16; i++) {
  grid.push([]);
}
for (let j = 0; j < 16; j++) {
  for (let k = 0; k < 28; k++) {
    grid[j].push("");
  }
}

export default grid;
