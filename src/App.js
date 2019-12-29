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
      }
    }
  }

  onClick = (e) => {
    this.setState({
      backgroundStyle: {
        'background': '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      }
    })
  }

  render() {
    return (
      <div className="App" style={this.state.backgroundStyle} onClick={this.onClick}>
        <img className="noselect" src={splash} height="300"/>
      </div>
    );
  }
};

export default App;
