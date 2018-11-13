import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux';
// 引入创建好的store实例
import store from '@/store/index.js';

// import Home from '../home';
// import Task from '../task';
// import QuotaManage from '../quota-manage';
// import HtForm from '../ht-form';
// import QuotaDetail from '../quota-details/index';
// import ParamsManage from '../params-manage';
// import QuotaMoney from '../day-manage/quota-money';
// import ProgressSearch from '../day-manage/progress-search';
// 设置路由按需加载
import { asyncComponent } from '@/components/asyncComponent';
const Home = asyncComponent(() => import('../home'));
const Task = asyncComponent(() => import('../task'));
const QuotaManage = asyncComponent(() => import('../quota-manage'));
const HtForm = asyncComponent(() => import('../ht-form'));
const QuotaDetail = asyncComponent(() => import('../quota-details/index'));
const ParamsManage = asyncComponent(() => import('../params-manage'));
const QuotaMoney = asyncComponent(() => import('../day-manage/quota-money'));
const ProgressSearch = asyncComponent(() =>
  import('../day-manage/progress-search')
);

// 路由按需加载
// import Bundle from '@/components/bundle.js';
// const Home = props => (
//   <Bundle load={() => import('../home')}>{Home => <Home {...props} />}</Bundle>
// );
// const Task = props => (
//   <Bundle load={() => import('../task')}>{Task => <Task {...props} />}</Bundle>
// );
// const QuotaManage = props => (
//   <Bundle load={() => import('../quota-manage')}>
//     {QuotaManage => <QuotaManage {...props} />}
//   </Bundle>
// );
// const HtForm = props => (
//   <Bundle load={() => import('../ht-form')}>
//     {HtForm => <HtForm {...props} />}
//   </Bundle>
// );
// const QuotaDetail = props => (
//   <Bundle load={() => import('../quota-details/index')}>
//     {QuotaDetail => <QuotaDetail {...props} />}
//   </Bundle>
// );
// const ParamsManage = props => (
//   <Bundle load={() => import('../params-manage')}>
//     {ParamsManage => <ParamsManage {...props} />}
//   </Bundle>
// );
// const QuotaMoney = props => (
//   <Bundle load={() => import('../day-manage/quota-money')}>
//     {QuotaMoney => <QuotaMoney {...props} />}
//   </Bundle>
// );
// const ProgressSearch = props => (
//   <Bundle load={() => import('../day-manage/progress-search')}>
//     {ProgressSearch => <ProgressSearch {...props} />}
//   </Bundle>
// );

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="con-box">
        <Provider store={store}>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/task" component={Task} />
            <Route path="/quota-manage" component={QuotaManage} />
            <Route path="/ht-form" component={HtForm} />
            <Route path="/limit-details" component={QuotaDetail} />
            <Route path="/config-mgr" component={ParamsManage} />
            <Route path="/limit-book" component={QuotaMoney} />
            <Route path="/article-query" component={ProgressSearch} />
          </div>
          {/* <Route path="/pro" exact render={() => to="/pro/home" />}></Route> */}
        </Provider>
      </div>
    );
  }
}
export default Main;
