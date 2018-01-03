import React, { Component } from 'react';
import Header from './components/header/menu';
import LiveBar from './components/header/live-bar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LiveBar />
      </div>
    );
  }
}

export default App;
