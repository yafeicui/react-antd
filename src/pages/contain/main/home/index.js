import React, { Component } from 'react';
import './index.css';

import url from './logo-welcome.jpg';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  changePage = () => {
    console.log(this.props.history)
  }
  render() {
    return (
      <div className="home-box">
        <img className="home-img" src={url} alt="" />
      </div>
    )
  }
}

export default Home;