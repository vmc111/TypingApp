import "./index.css";

const TypingBox = (props) => {
  const { userInput } = props;
  const startTimer = () => {
    const { start } = props;
    start();
  };

  const resetFunction = () => {
    const { reset } = props;
    reset();
  };

  const onTyped = (event) => {
    const { changeUserInput } = props;
    changeUserInput(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        value={userInput}
        type="text"
        onChange={onTyped}
        className="input-element"
      />
      <div className="start-stop">
        <button type="btn" className="btn btn-start" onClick={startTimer}>
          Start
        </button>
        <button type="button" className="btn stop-btn" onClick={resetFunction}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TypingBox;
