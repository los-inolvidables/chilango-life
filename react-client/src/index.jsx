import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Museums from "./components/museos.js";
import Close from "./components/close.js";
import Parks from "./components/parques.js";


class App extends React.Component{
  render(){
    return (
      <div>
        <div className="main">
          <h1>Chilango Life</h1>
        </div>
        <div className="navbar">
          <Museums />
          <Parks />
          <Close />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
