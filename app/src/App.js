import React from 'react';
import logo from './stanford.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Water_polo"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is water polo?
        </a>
      </header>
    </div>
  );
}

export default App;
