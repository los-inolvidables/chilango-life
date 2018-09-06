import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class TypeWriteR extends React.Component {

  render() {
    return (
      // Passing in text.
      <div className="Type">
      <TypeWriter typing={1}>testing TypeWriter!!!!!!</TypeWriter>
      </div>
    );
  }

}









export default TypeWriteR;
