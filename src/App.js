import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var msg = "Welcome React World!!!"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{msg}</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, Please!!!
          <br />
          Hello World!!!
          <br />
          来来来！！！
        </a>
      </header>
    </div>
  );
}

export default App;
