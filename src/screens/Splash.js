import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ScatterJS from 'scatter-js/dist/scatter.esm';

import './core.css';

export default class Splash extends Component {

  // scatter wallet
  componentDidMount() {
    ScatterJS.scatter.connect("EOSCoLab").then(connected => {
      if(!connected) {
        // User does not have scatter installed/ unlocked
        return false;
      }

      ScatterJS.scatter.getIdentity().then(identity => {
      }).catch(error => {})
    });
  }

  render() {
    return(
      <div className='stckbg'>
        <div className='loginbutt'>
          <Link to='/home'>
            Login
          </Link>
        </div>
      </div>
    )
  }
}
