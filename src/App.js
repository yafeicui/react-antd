import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import './router/index.js';

import ProMenu from './pages/menu/index.js';
import ProMain from './pages/contain/index/index.js';
import { createHttp } from './http/axios.js';

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
// import { Provider } from 'react-redux'
// // 引入创建好的store实例
// import store from '@/store/index.js'

createHttp()

class App extends Component {
  componentDidMount() {
    // console.log(store, 'store111')
  }
  render() {
    return (
      <Router>
        {/* <Provider store={store}> */}
          <div className="App">
            <div className="app-menu">
              <ProMenu />
            </div>
            <div className="app-contain">
            {/* <Provider store={store}> */}
              <ProMain />
            {/* </Provider> */}
            </div>
          </div>
        {/* </Provider> */}
      </Router>
    );
  }
}

export default App;
