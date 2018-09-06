import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import typeWriter from './components/typeWriter.jsx';
class App extends React.Component{
  render(){
    return (
      <div>
      <div>
      <h1>Chilango Life</h1>
      </div>
      // <BrowserRouter>
      // <Route path="/" Component={Home}/>
      // </BrowserRouter>
       <typeWriter/>
       </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
