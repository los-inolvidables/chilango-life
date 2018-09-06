import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


class Parks extends React.Component{
  render(){
    return(

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
    
    );
  }
}
export default Parks;
