let gridVar = [];

for (let i = 0; i < 17; i++) {
  gridVar.push([]);
}
for (let j = 0; j < 17; j++) {
  for (let k = 0; k < 17; k++) {
    gridVar[j].push("");
  }
}

export default gridVar;
