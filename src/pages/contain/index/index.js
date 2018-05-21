import React, { Component } from 'react';
import './index.css';

import ProHeader from '../header/index.js';
import ProCon from '../main/index/index.js';
class ProMain extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="main-box">
        <ProHeader />
        <ProCon />
      </div>
    )
  }
}

export default ProMain;