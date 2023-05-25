import "./index.css";

const Stats = (props) => {
  const { wordsCount, score } = props;

  const accuracy = wordsCount < 2 ? 100 : (score / (wordsCount - 1)) * 100;

  return (
    <div className="stats-bg">
      <h3 className="stats-heading">Accuracy: {accuracy}%</h3>
      <h3 className="stats-heading">Total Words: {wordsCount}</h3>
    </div>
  );
};

export default Stats;
