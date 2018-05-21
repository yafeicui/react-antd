import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import './index.css';

const { TabPane } = Tabs;
export default class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTable: '1',
    }
  }
  changeTabs = (key) => {
    this.setState({
      activeTable: key,
    })
  }
  render() {
    return (
      <div className="limit-detail">
        <Card>
          <Tabs defaultActiveKey="1" onChange={this.changeTabs} >
            <TabPane tab='额度信息' key='1'>
            111
              {/* {this.state.activeTable === '1' ? <ToDoTask /> : ''} */}
            </TabPane>
            <TabPane tab='客户信息' key='2'>
            222
              {/* {this.state.activeTable === '2' ? <ComplatedTask /> : ''} */}
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}
