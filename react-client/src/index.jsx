import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";

class App extends React.Component{
  render(){
    return (
      // <div>
      // <h1>Chilango Life</h1>
      // </div>
      <BrowserRouter>
      <Route path="/" Component={Home} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
