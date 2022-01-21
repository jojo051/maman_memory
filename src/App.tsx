import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Autentification from './Components/Autentification';
import TestAppelApi from './Components/TestAppelApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test/>
        <Autentification/>
        <TestAppelApi/>
      </header>
    </div>
  );
}

export default App;
