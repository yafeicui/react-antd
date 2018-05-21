import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';

import Home from '../home';
import Task from '../task';
import QuotaManage from '../quota-manage';
import HtForm from '../ht-form';
import QuotaDetail from '../quota-details/index';
// import Menu from '../menu';
// import Role from '../role';
// import Home from '../home';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="con-box">
        {/* <Route path="/pro" exact render={() => to="/pro/home" />}></Route> */}
        <Route path="/home" component={Home}></Route>
        <Route path="/task" component={Task}></Route>
        <Route path="/quota-manage" component={QuotaManage}></Route>
        <Route path="/ht-form" component={HtForm}></Route>
        <Route path="/limit-details" component={QuotaDetail}></Route>
        {/* <Route path="/system/home" component={Home}></Route> */}
      </div>
    )
  }
}
export default Main;