import React from 'react';

class Museums extends React.Component{
  render(){
    return(
      <div>
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
      </div>
    );
  }
}

export default Museums;
