import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

class Sidebar extends Component {

  // OB/BJM: unnecessary, nothing special is happening in constructor
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <sidebar>
        <img src="Rock-Guitar-icon.png" className="logo" />
        <h3>Search By Brand (these are guitars bro):</h3>
        <ul className="sidebarUl">
          {/*<li>Brand 1 <span><input type="checkbox" /></span></li>
          <li>Brand 2 <span><input type="checkbox" /></span></li>
          <li>Brand 3 <span><input type="checkbox" /></span></li>
          <li>Brand 4 <span><input type="checkbox" /></span></li>
          <li>Brand 5 <span><input type="checkbox" /></span></li>*/}
        </ul>
        <h3>Search By Types:</h3>
        <ul className="sidebarUl">
          <li>Electric <span><input type="checkbox" /></span></li>
          <li>Acoustic <span><input type="checkbox" /></span></li>
        </ul>
        <h3>Search By Prices:</h3>
        <ul className="sidebarUl">
          <li>$100 - $200 <span><input type="checkbox" /></span></li>
          <li>$201 - $300 <span><input type="checkbox" /></span></li>
          <li>$301 - $400 <span><input type="checkbox" /></span></li>
          <li>$400 - $500 <span><input type="checkbox" /></span></li>
          <li>$501+ <span><input type="checkbox" /></span></li>
        </ul>
      </sidebar>
    );
  }
}

export default connect()(Sidebar);
