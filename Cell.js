export default function Cell(props) {
  let hasSnake = props.hasSnake;
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "grey",
        border: "1px solid black",
      }}
    >
      {hasSnake ? "S" : ""}
    </div>
  );
}
