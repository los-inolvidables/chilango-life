import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class TypeWriteR extends React.Component {

  render() {
    return (
      // Passing in text.
      <div className="Type">
      <TypeWriter typing={1}>That is definitely not enough info/context.
React version, component structure, etc. Please create Codepen/jsbin example that can reproduce the issue, otherwise I have no idea man_shrugging

I reckon I've seen this kind of error somewhere on my projects, but don't remember all the details. Probably was related with incorrect exports somewhere or mapper function within react tree</TypeWriter>
      </div>
    );
  }

}









export default TypeWriteR;
