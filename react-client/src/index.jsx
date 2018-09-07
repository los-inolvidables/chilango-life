import React , { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home.js";
import Bar from "./components/bar.js";

import Zocalo from "./components/parques/zocalo.js";
import Bosque from "./components/parques/bosque.js";
import Alameda from "./components/parques/alameda.js";
import Desierto from "./components/parques/desierto.js";
import Bicentenario from "./components/parques/bicentenario.js";


import Piramides from "./components/close/piramides.js";
import Tepozotlan from "./components/close/tepozotlan.js";
import Valle from "./components/close/valle.js";
import Marqueza from "./components/close/marqueza.js";
import Tula from "./components/close/tula.js";


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div>


          <Bar />


          <Switch>
            <Route exact path="/" component={Home}/>
          <Route path="/zocalo" component={Zocalo}/>
          <Route path="/bosque" component={Bosque}/>
          <Route path="/alameda" component={Alameda}/>
          <Route path="/desierto" component={Desierto}/>
          <Route path="/bicentenario" component={Bicentenario}/>

          <Route path="/piramides" component={Piramides}/>
          <Route path="/tepozotlan" component={Tepozotlan}/>
          <Route path="/valle" component={Valle}/>
          <Route path="/marqueza" component={Marqueza}/>
          <Route path="/tula" component={Tula}/>


          </Switch>
      </div>
      </BrowserRouter>

    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
