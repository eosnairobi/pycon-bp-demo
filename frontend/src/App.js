import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Producers from "./container/producers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Producers />
      </div>
    );
  }
}

export default App;
