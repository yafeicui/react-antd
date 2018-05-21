import React, { Component } from 'react';
import { Tabs } from 'antd';
import CommonDialog from '@/components/common-dialog';
import SingleCard from './chioce-card';

const { TabPane } = Tabs;

class SingleDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTable: '1'
    }
  }
  singleDialog = React.createRef();
  show = () => {
    this.singleDialog.current.show();
  }
  callback = (key) => {
    this.setState({
      activeTable: key
    })
  }
  render() {
    const modelConfig = {
      footer: null,
      width: 800,
      title: '新增单笔单批',
    }
    return (
      <CommonDialog ref={this.singleDialog} {...modelConfig}>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="对公" key="1">
            {this.state.activeTable === '1' ? <SingleCard custType="1" /> : ''}
          </TabPane>
          <TabPane tab="对私" key="2">
            {this.state.activeTable === '2' ? <SingleCard custType="2" /> : ''}
          </TabPane>
        </Tabs>
      </CommonDialog>
    )
  }
}
export default SingleDialog;