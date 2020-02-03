import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

let StyledClock = styled.div`
  font-size: 24px;
`;

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
        time: moment().format('dddd MMMM D YYYY, h:mm:ss A')
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
      time: moment().format('dddd MMMM D YYYY, h:mm:ss A')

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
