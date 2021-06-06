import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import usopp from './usopp.png';
import Clock from './components/Clock.js';
import Countdown from './components/Countdown.js';
import Hygrometer from './components/Hygrometer.js';
import AC from './components/AC.js';
import apiService from './services/ApiService.js';
import login from 'tplink-cloud-api';

let Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

let Header = styled.div`
  border-bottom : 1px solid black;
  display: flex;
  justify-content: flex-end;
  line-height: 80px;
  height: 80px;
  padding: 10px 20px;
  position: relative;
`;

let Farmer = styled.div`
  position: absolute;
  left: 50%;
  font-size: 2em;
  transform: translateX(-50%);
`;

let Body = styled.div`
  display: flex;
  padding: 20px;

  > * {
    margin-right: 20px;
  }
`;

let Column = styled.div`
  width: 33.33%;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hygrometerData: {
        temperature: '?',
        humidity: '?'
      },
      acOn: false
    }
  }


  async componentDidMount() {
    let hData = await this.getHygrometerData();
    let acData = await this.getAcStatus();
    console.log(acData);
    this.setState({
      hygrometerData: hData,
      acOn: acData.acOn
    });

    setInterval(async () => {
      let hData = await this.getHygrometerData();
      let acData = await this.getAcStatus();
      this.setState({
        hygrometerData: hData,
        acOn: acData.acOn
      });
    }, 10000)

  }

  async getHygrometerData() {
    let res = await apiService.getHygrometerData();
    let data = await res.json();

    let update = {
      temperature: data.temperature,
      humidity: data.humidity
    }

    return update;
  }

  async getAcStatus() {
    let res = await apiService.getAcStatus();
    let data = await res.json();

    return data;
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
      <div className="App">
        <Wrapper>
          <Header>
            <Farmer>👨‍🌾</Farmer>
            <Clock></Clock>
          </Header>
        
          <Body>
            <Hygrometer temperature={this.state.hygrometerData.temperature} humidity={this.state.hygrometerData.humidity}></Hygrometer>
            <AC acOn={this.state.acOn}></AC>
          </Body>
        </Wrapper>
        {/* <ul>
          <li onClick={this.onLightClick}><span>{this.state.light ? 'light on' : 'light off'}</span></li>
        </ul>
        <div>
        
          <img onClick={this.onClick} className="noselect" src={splash} height="300"/>
        </div> */}
      </div>
    );
  }
};

export default App;
