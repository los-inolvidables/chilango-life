import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Bar from "./components/bar";


class App extends React.Component{
  render(){
    return (
      <div>
      <div className="main">
        <h1>Chilango Life</h1>
      </div>
      <Bar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
