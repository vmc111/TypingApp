import { Component } from "react";
import { BsStopwatchFill } from "react-icons/bs";
import "./index.css";

export default class Timer extends Component {
  state = { timeElapsedInSeconds: 300, isTimerOn: false };

  componentDidUpdate = () => {
    const { isTimerOn } = this.state;
    const { runTimer } = this.props;
    if (runTimer === true && isTimerOn === false) {
      this.timeInterval = setInterval(this.updateTime, 1000);
      this.setState({ isTimerOn: true });
    }
    if (runTimer === false && isTimerOn === true) {
      this.onStopTimer();
    }
  };

  onStopTimer = () => {
    this.setState({ isTimerOn: false, timeElapsedInSeconds: 300 });
    clearInterval(this.timeInterval);
  };

  updateTime = () => {
    const { timeElapsedInSeconds } = this.state;
    if (timeElapsedInSeconds === 0) {
      return this.onStopTimer();
    }
    this.setState((prevState) => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds - 1,
    }));
  };

  renderSeconds = () => {
    const { timeElapsedInSeconds } = this.state;
    const seconds = Math.floor(timeElapsedInSeconds % 60);

    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };

  renderMinutes = () => {
    const { timeElapsedInSeconds } = this.state;
    const minutes = Math.floor(timeElapsedInSeconds / 60);

    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`;
    return (
      <div className="header-div">
        <BsStopwatchFill size="50" color="#ffc107" className="icon" />
        <p className="timer">{time}</p>
      </div>
    );
  }
}
