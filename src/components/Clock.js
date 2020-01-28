import React, { Component } from 'react';
import styled from 'styled-components';

let StyledClock = styled.div`
font-size: 30px;
font-family: 'VT323', monospace;
`;

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
        time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  onClick = (e) => {
    this.setState({
      backgroundStyle: {
        'background': '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      }
    })
  }

  onLightClick = (e) => {
    this.setState({
      light: !this.state.light
    })
  }

  render() {
    return (
      <StyledClock>{this.state.time}</StyledClock>
    );
  }
};

export default Clock;
