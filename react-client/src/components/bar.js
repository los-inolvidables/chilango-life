import React from 'react';


const Bar = (props) => (

  <div>
  <div className="navbar">
  <a href="#home">Home</a>
  <div className="subnav">
    <button className="subnavbtn">Museums <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#castillo">Castillo de chapultepec</a>
      <a href="#cera">Museo de cera</a>
      <a href="#fida">Museo Frida Kahlo</a>
      <a href="#planetario">Planetario</a>
      <a href="#papalote">Papalote Museo del Niño</a>
    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn"> Parks<i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
    <a href="#zocalo">Centro Historico</a>
    <a href="#chapultepec">Bosque de Chapultepec</a>
    <a href="#alameda">Alameda Central</a>
    <a href="#desierto">Desierto de los leones</a>
    <a href="#bicentenario">Parque Bicentenario</a>
    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn">Close to the city<i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#teotihuacan">Piramides de teotihuacan</a>
      <a href="#tepoztlan">Tepoztlan</a>
      <a href="#valle">Valle de Bravo</a>
      <a href="#marqueza">Marqueza</a>
      <a href="#tula">Tula</a>
    </div>
  </div>
  <a href="#foro">Last minute events!</a>
</div>

  </div>

);

export default Bar;
