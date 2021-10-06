let gridVar = [];

for (let i = 0; i < 16; i++) {
  gridVar.push([]);
}
for (let j = 0; j < 16; j++) {
  for (let k = 0; k < 28; k++) {
    gridVar[j].push("");
  }
}

// #65b536 - nokia background
// #00062e - food and snake

export default gridVar;
