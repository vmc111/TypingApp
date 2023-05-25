import { Component } from "react";
import TypingBox from "./components/TypingBox";
import KeysToRender from "./components/KeystoRender";
import Timer from "./components/Timer";
import Stats from "./components/Stats";

import "./App.css";

export default class App extends Component {
  state = {
    runTimer: false,
    wordsCount: 0,
    wordLength: 4,
    word: "",
    userInput: "",
    score: 0,
  };

  changeWordSize = async (value) => {
    const { wordsCount, runTimer } = this.state;
    if (runTimer) {
      const newCount = wordsCount > 0 ? wordsCount - 1 : wordsCount;
      await this.setState({
        wordLength: parseInt(value),
        wordsCount: newCount,
      });
      this.createWord();
    } else {
      this.setState({ wordLength: parseInt(value) });
    }
  };

  createWord() {
    const keysToRenderArray = ["a", "s", "d", "f", "j", "k", "l"];
    const { wordLength } = this.state;
    let wordToRender = "";
    for (let i = 0; i < wordLength; i++) {
      const index = Math.floor(Math.random() * 7);
      wordToRender += keysToRenderArray[index];
    }
    this.setState((preState) => ({
      wordsCount: preState.wordsCount + 1,
      word: wordToRender,
    }));
  }

  changeUserInput = (input) => {
    this.setState({ userInput: input });
    const { word } = this.state;
    if (input.length === word.length) {
      if (input === word) {
        this.setState((preState) => ({
          score: preState.score + 1,
          userInput: "",
        }));
      }
      this.setState({ userInput: "" });
      this.createWord();
    }
  };

  onClickReset = () =>
    this.setState({ runTimer: false, word: "", wordsCount: 0, score: 0 });

  onClickStart = () => {
    this.setState({ runTimer: true });
    this.createWord();
  };

  render() {
    const {
      runTimer,
      wordLength,
      word,
      userInput,
      wordsCount,
      score,
    } = this.state;
    return (
      <>
        <Timer runTimer={runTimer} />
        <KeysToRender
          word={word}
          changeWordSize={this.changeWordSize}
          wordLength={wordLength}
        />
        <TypingBox
          changeUserInput={this.changeUserInput}
          wordLength={wordLength}
          userInput={userInput}
          start={this.onClickStart}
          reset={this.onClickReset}
        />
        <Stats wordsCount={wordsCount} score={score} />
      </>
    );
  }
}
