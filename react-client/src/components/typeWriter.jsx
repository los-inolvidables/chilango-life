import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from 'jquery';

class typeWriter extends React.Component {

  render() {
    return (
      // Passing in text.
      <div>
      <TypeWriter typing={1}>testing TypeWriter!!!!!!!</TypeWriter>
      </div>
    );
  }

}








export default typeWriter;
