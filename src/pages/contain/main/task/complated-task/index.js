import React, { Component } from 'react';
import { Input, Icon, message, Tooltip } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import HtTable from '@/components/common-table'
import CommenForm from '../common-form';
import './index.css';

class ComplatedTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleForm: {
        customerId: "",
        limitApplyId: "",
      },
    }
  }
  handleRecall = (row) => {
    axios({
      url: `/api/flowService/retrieve`,
      method: 'post',
      data: {
        taskId: row.taskId, // 任务节点编号
        businessKey: row.limitApplyId, // 业务编号	
      },
    }).then(() => {
      message.success('撤回成功');
      this.htTable.current.handleGetPaginationInfo();
    })
  }
  handleSubmit = (value) => {
    this.setState({
      ruleForm: { limitApplyId: value.custName, customerId: value.custId },
    }, () => {
      this.htTable.current.handleGetPaginationInfo();
    })
  }
  handleReset = () => {
    this.setState({
      ruleForm: { limitApplyId: '', customerId: '' },
    }, () => {
      this.htTable.current.handleGetPaginationInfo();
    })
  }
  htTable = React.createRef();
  render() {
    const tableConfig = {
      ajaxConfig: {
        url: `/api/flowService/queryDoneList`,
        method: 'get',
        params: this.state.ruleForm,
      },
      columns: [
        { title: '客户编号', dataIndex: 'customerId', align: 'center', width: 180   },
        { title: '额度编号', dataIndex: 'limitApplyId', align: 'center', width: 180   },
        { title: '客户名称', dataIndex: 'customerName', align: 'center', width: 180   },
        { title: '产品名称', dataIndex: 'productName', align: 'center', },
        // { title: '申请性质', dataIndex: 'limitNature', align: 'center', width: 180   },
        { title: '申请来源', dataIndex: 'channelCd', align: 'center', width: 180   },
        { title: '申请时间', dataIndex: 'startTime', align: 'center', width: 180   },
        {
          title: '操作',
          width: 100,
          align: 'center',
          render: (text, record) => (
            <div>
              <Tooltip placement="topLeft" title="撤回">
                <Icon type="left" onClick={() => this.handleRecall(text, record)} />
              </Tooltip>
            </div>
          ),
        },
      ],
    }
    const formConfig = {
      formConfig: [
        {
          component: Input,
          fieldName: 'custId',
          props: { placeholder: '客户编号' },
        },
        {
          component: Input,
          fieldName: 'custName',
          props: { placeholder: '额度编号' },
        },
      ],
      layout: 'inline',
      htFormRef: form => { this.htFrom = form },
      onSubmit: values => this.handleSubmit(values),
      handleReset: () => this.handleReset(),
    }
    return (
      <div className="complated-task">
        <CommenForm {...formConfig} />
        <div className="table-top-div" />
        <HtTable {...tableConfig} ref={this.htTable} />
      </div>
    )
  }
}
export default withRouter(ComplatedTask);
