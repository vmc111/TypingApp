import "./index.css";

const KeysToRender = (props) => {
  const { word, wordLength } = props;
  const handleSelectionChange = (event) => {
    const { changeWordSize } = props;
    changeWordSize(event.target.value);
  };
  console.log(word);
  return (
    <div className="keys-bg">
      <div className="select-div">
        <h3 className="select-heading">Select Word Size: </h3>
        <select
          className="select-element"
          value={`${wordLength}`}
          onChange={handleSelectionChange}
        >
          <option value="4">4 letters</option>
          <option value="5">5 letters</option>
          <option value="6">6 letters</option>
          <option value="7">7 letters</option>
          <option value="8">8 letters</option>
        </select>
      </div>
      <div className="key-div correct-border">
        <h1 className="key-element">{word}</h1>
      </div>
    </div>
  );
};

export default KeysToRender;
