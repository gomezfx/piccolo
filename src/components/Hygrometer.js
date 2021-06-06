import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card.js';

let StyledHygrometer = styled.div`
  display: flex;

  > * {
    &:first-child {
      margin-right: 20px;
    }
  }
`;

let StyledEmoji = styled.div`
  font-size: 2em;
`;

let StyledReading = styled.span`
  font-size: 4em;
`;

class Hygrometer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <StyledHygrometer>
        <Card><StyledEmoji>🌡️</StyledEmoji><strong>Temperature</strong><br/><StyledReading>{this.props.temperature || '?'}</StyledReading> °F</Card><Card><StyledEmoji>💧</StyledEmoji><strong>Humidity</strong><br/><StyledReading>{this.props.humidity || '?'}</StyledReading> %</Card>
      </StyledHygrometer>
    );
  }
};

export default Hygrometer;
