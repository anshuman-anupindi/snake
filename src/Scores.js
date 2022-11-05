export default function Scores(props) {
  let [score, scores] = [props.snake.length * 10, props.scores.sort()];

  return (
    <ul>
      {scores.map((score) => (
        <li>{score}</li>
      ))}
    </ul>
  );
}
