import React from "react";
import logo from "./logo.svg";
import "./style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="bg-red-900 text-white">Hello Dashboard-App</h1>
      <button className="btn btn--secondary">Decline</button>
      <button className="btn btn--primary">Accept</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
