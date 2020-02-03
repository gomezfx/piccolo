import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import splash from './piccolo.png';
import Clock from './components/Clock.js';
import Countdown from './components/Countdown.js';

let Header = styled.div`
  height: 20px;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  padding: 10px;
`;

let Body = styled.div`
  text-align: center;
  padding-top: 20px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backgroundStyle: {
          'background': '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      },
      light: false
    }
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
    }, () => {
      if (this.state.light) {
        fetch('http://localhost:4502/on')
          .then((response) => {
            // got response;
          })
      } else {
        fetch('http://localhost:4502/off')
          .then((response) => {
            // got response;
          })
      }
    })

  }

  render() {
    return (
      <div className="App" style={this.state.backgroundStyle} >
        <Header>
          <div onClick={this.onClick}>
            ☻ Piccolo v0.1.0
          </div>

            <Clock></Clock>

        
        </Header>
        <Body>

        </Body>
        {/* <ul>
          <li onClick={this.onLightClick}><span>{this.state.light ? 'light on' : 'light off'}</span></li>
        </ul>
        <div>
        
          <img onClick={this.onClick} className="noselect" src={splash} height="300"/>
        </div> */}
        <Countdown></Countdown>
      </div>
    );
  }
};

export default App;
