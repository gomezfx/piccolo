import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card.js';

let StyledAc = styled.div`

`;

let StyledButton = styled.button`
    font-size: 1em;
    outline: none
    border: 1px solid black;
    border-radius: 3px;
    padding: 20px;
    background: black;
    color: white;
    min-width: 200px;
    cursor: pointer;
    display: block;
    &:disabled {
        opacity: .3;
        cursor: not-allowed;
    }
`;

let StyledEmoji = styled.div`
  font-size: 2em;
`;

let StyledReading = styled.span`
  font-size: 4em;
`;

class AC extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <StyledAc>
        <Card><StyledEmoji>💨</StyledEmoji><strong>AC Status</strong><br/><StyledReading>{this.props.acOn ? 'ON' : 'OFF'}</StyledReading>
        <StyledButton disabled>{this.props.acOn ? 'Turn Off' : 'Turn On'}</StyledButton></Card>
      </StyledAc>
    );
  }
};

export default AC;
