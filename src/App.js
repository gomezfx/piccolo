import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import splash from './piccolo.png';
import Clock from './components/Clock.js';

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
        <ul>
          <li onClick={this.onLightClick}><span>{this.state.light ? 'light on' : 'light off'}</span></li>
        </ul>
        <div>
        <Clock></Clock>
          <img onClick={this.onClick} className="noselect" src={splash} height="300"/>
        </div>
        
      </div>
    );
  }
};

export default App;
