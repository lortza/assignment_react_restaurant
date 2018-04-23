import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Menu from './components/Menu'
import Location from './components/Location'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <About />
          <Menu />
          <Location />
        </div>
      </div>
    );
  }
}

export default App;
