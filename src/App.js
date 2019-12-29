import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import splash from './piccolo.png';
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
    })
  }

  render() {
    return (
      <div className="App" style={this.state.backgroundStyle} >
        <ul>
          <li onClick={this.onLightClick}><span>{this.state.light ? 'light on' : 'light off'}</span></li>
        </ul>
        <img onClick={this.onClick} className="noselect" src={splash} height="300"/>
      </div>
    );
  }
};

export default App;
