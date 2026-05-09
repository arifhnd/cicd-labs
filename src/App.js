import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <header className="App-header" style={{ backgroundColor: '#282c34', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ height: '40vmin', pointerEvents: 'none' }} />
        <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>Test CI/CD Pipeline</h1>
        <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>This app is for testing CI/CD pipeline for bootcamp dicoding.</p>
      </header>
      </div>
    );
  }
}

export default App;
