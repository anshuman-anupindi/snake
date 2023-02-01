const black = "#00062e";
const green = "#32a852";

let gridStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

let rowStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

let dummyPixelStyle = {
  width: "10px",
  height: "10px",
  backgroundColor: "",
  border: "1px solid #32a852",
};

let pixelRows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export { black, green, gridStyle, rowStyle, dummyPixelStyle, pixelRows };
