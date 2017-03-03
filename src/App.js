import React, { Component } from 'react';
import iCollectorlogo from './Logo-Icollector.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={iCollectorlogo} alt="logo" />
        </div>
        <p className="App-intro">
        iContentCollector: You are running this application in <b>{process.env.NODE_ENV}</b> mode.
          
        </p>
      </div>
    );
  }
}

export default App;
