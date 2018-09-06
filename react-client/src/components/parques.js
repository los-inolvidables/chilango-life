import React from 'react';


const Parks = (props) => (

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

export default Parks;
