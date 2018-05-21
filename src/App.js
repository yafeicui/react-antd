import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import './router/index.js';

import ProMenu from './pages/menu/index.js';
import ProMain from './pages/contain/index/index.js';
import { createHttp } from './http/axios.js';
createHttp()

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-menu">
            <ProMenu />
          </div>
          <div className="app-contain">
            <ProMain />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
