import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Coverflow from 'react-coverflow';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }
