import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Task from '../pages/contain/main/task/index.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="main-box">
        {/* <Route path="/system" exact render={() => to="/system/home" />}></Route> */}
        <Route path="/task" component={Task}></Route>
        {/* <Route path="/system/role" component={Role}></Route>
        <Route path="/system/dept" component={Dept}></Route>
        <Route path="/system/dict" component={Dict}></Route>
        <Route path="/system/menu" component={Menu}></Route>
        <Route path="/system/home" component={Home}></Route> */}
      </div>
    )
  }
}
export default Main;