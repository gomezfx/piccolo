import React, { Component } from 'react';
import styled from 'styled-components';

let StyledCard = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
`;

class Card extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <StyledCard>{this.props.children}</StyledCard>
    );
  }
};

export default Card;
