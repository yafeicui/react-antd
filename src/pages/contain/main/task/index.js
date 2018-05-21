import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import './index.css';
// import BehalfTask from './behalf-task';
import ToDoTask from './todo-task';
import ComplatedTask from './complated-task';

const { TabPane } = Tabs;
export default class MyTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTable: 'toDo',
    }
  }
  changeTabs = (key) => {
    this.setState({
      activeTable: key,
    })
  }
  render() {
    return (
      <div className="task">
        <Card>
          <Tabs defaultActiveKey="toDo" onChange={this.changeTabs} >
            {/* <TabPane tab='待领任务' key='behalf'>
              {this.state.activeTable === 'behalf' ? <BehalfTask /> : ''}
            </TabPane> */}
            <TabPane tab='待办任务' key='toDo'>
              {this.state.activeTable === 'toDo' ? <ToDoTask /> : ''}
            </TabPane>
            <TabPane tab='已办任务' key='complated'>
              {this.state.activeTable === 'complated' ? <ComplatedTask /> : ''}
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}
