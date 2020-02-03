import React, { Component } from "react";
import styled from 'styled-components'

let CountdownTime = styled.div`
    font-size: 60px
`;

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    if (this.state.timerTime <= 0) {
        return;
    }

    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    let _this = this;
    setTimeout(() => {
        _this.timer = setInterval(() => {
            const newTime = _this.state.timerTime - 10;
            if (newTime >= 0) {
                _this.setState({
                timerTime: newTime
              });
            } else {
              clearInterval(_this.timer);
              _this.setState({ 
                  timerOn: false,
                  timerTime: 0,
                  timerStart: 0
                });
      
              fetch('http://localhost:4502/off')
              .then((response) => {
                // got response;
              })
            }
          }, 10); 
    }, 500);


    fetch('http://localhost:4502/on')
    .then((response) => {
      // got response;
    })
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
    
    fetch('http://localhost:4502/off')
    .then((response) => {
      // got response;
    })
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: 0,
        timerStart: 0
      });
    }

    fetch('http://localhost:4502/off')
    .then((response) => {
      // got response;
    })
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <div className="Countdown-label">Hours : Minutes : Seconds</div>
        <div className="Countdown-display">
          <button className="no-border" onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button className="no-border" onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
          <button className="no-border" onClick={() => this.adjustTimer("incSeconds")}>&#8679;</button>

            <CountdownTime>
                {hours} : {minutes} : {seconds}
            </CountdownTime>

          <button className="no-border" onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button className="no-border" onClick={() => this.adjustTimer("decMinutes")}>&#8681;</button>
          <button className="no-border" onClick={() => this.adjustTimer("decSeconds")}>&#8681;</button>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default Countdown;