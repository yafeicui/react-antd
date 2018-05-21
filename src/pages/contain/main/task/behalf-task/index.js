import React, { Fragment, Component } from 'react';
import { Input, Divider, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import HtTable from '@/components/common-table'
import CommenForm from '../common-form';
import './index.css';

class BehalfTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleForm: {
        customerName: "",
        limitApplyId: "",
      },
    }
  }
  handleEdit = (row) => {
    this.props.history.push({
      pathname: '/limit-details',
      query: {
        limitApplyId: row.limitApplyId,
        customerId: row.customerId,
        productCd: row.productCd,
      },
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
        url: `/api/flowService/queryWaitClaimList`,
        method: 'get',
        params: this.state.ruleForm,
      },
      columns: [
        { title: '客户名称', dataIndex: 'customerName' },
        { title: '客户编号', dataIndex: 'customerId' },
        { title: '额度编号', dataIndex: 'limitApplyId' },
        { title: '产品名称', dataIndex: 'productName' },
        { title: '进件方式', dataIndex: 'approveType' },
        { title: '申请来源', dataIndex: 'channelCd' },
        { title: '申请时间', dataIndex: 'startTime' },
        {
          title: '操作',
          render: () => (
            <div>
              <Icon type="edit" />
              <Divider type="vertical" />
              <Icon type="delete" />
            </div>
          ),
        },
      ],
    }
    const formConfig = {
      formConfig: [
        {
          component: Input,
          fieldName: 'customerName',
          props: { placeholder: '客户名称' },
        },
        {
          component: Input,
          fieldName: 'limitApplyId',
          props: { placeholder: '客户编号' },
        },
      ],
      layout: 'inline',
      htFormRef: form => { this.htFrom = form },
      onSubmit: values => this.handleSubmit(values),
      handleReset: () => this.handleReset(),
    }
    return (
      <div className="behalf-task">
        <CommenForm {...formConfig} />
        <div className="table-top-div" />
        <HtTable {...tableConfig} ref={this.htTable} />
      </div>
    )
  }
}
export default withRouter(BehalfTask);
