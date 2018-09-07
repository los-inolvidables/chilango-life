import React , { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Bar from "./bar.js";
import TypeWriteR from "./typeWriter.jsx";
//import Carousel from "./components/Carousel.js";

class Home extends React.Component{
  render(){
    return (
      <div>
        <div className="main">

          <h1>Chilango Life</h1>
        </div>

          <TypeWriteR />
          </div>


    );
  }
}
export default Home;
