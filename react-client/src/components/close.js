import React from 'react';

class Close extends React.Component{
  render(){
      return(

      <div>
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
      );
    }
}

export default Close;
