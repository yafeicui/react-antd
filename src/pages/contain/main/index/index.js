import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Home from '../home';
import Task from '../task';
import QuotaManage from '../quota-manage';
import HtForm from '../ht-form';
import QuotaDetail from '../quota-details/index';
import ParamsManage from '../params-manage';
// import Role from '../role';
// import Home from '../home';

// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from '@/store/index.js'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return <div className="con-box">
        <Provider store={store}>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/task" component={Task} />
            <Route path="/quota-manage" component={QuotaManage} />
            <Route path="/ht-form" component={HtForm} />
            <Route path="/limit-details" component={QuotaDetail} />
            <Route path="/config-mgr" component={ParamsManage} />
          </div>
          {/* <Route path="/pro" exact render={() => to="/pro/home" />}></Route> */}
        </Provider>
      </div>;
  }
}
export default Main;