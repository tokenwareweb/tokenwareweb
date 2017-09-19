import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import Issue from './Issue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Test your Tokenware</h2>
        </div>
        <p className="App-intro">
          <Issue />
        </p>
      </div>
    );
  }
}

export default App;
