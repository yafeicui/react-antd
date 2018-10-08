import React, { Component } from 'react';
import { Card, Divider, Icon, Button, Input, Select, Tooltip } from 'antd';
import axios from 'axios';
import PageHeader from '@/components/page-title';
import HtTable from '@/components/common-table';
import HtForm from '@/components/common-form';
import SingleDialog from './single/index';
import EditDialog from './edit-dialog';
import CompresiveCredit from './credit'
// import MixDialog from './mix/index';
import './index.css';

const { Option } = Select;
export default class QuotaManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ruleForm: {
        customerId: '',
        customerName: '',
        limitId: '',
        status: '2',
        selectDict: [],
      },
    }
  }
  componentWillMount = () => {
    this.setState({
      // selectDict: [...getListFromDict('limit_status')],
    })
  }
  tableColumn = {
    columns: [
      {
        title: '客户名称',
        dataIndex: 'customerName',
        align: 'center',
        width: 80,
      },{
        title: '客户编号',
        dataIndex: 'customerId',
        align: 'center',
        width: 150,
      }, {
        title: '额度编号',
        dataIndex: 'limitId',
        align: 'center',
        width: 150,
      }, {
        title: '总额度',
        dataIndex: 'limitAmt',
        align: 'center',
        width: 150,
      }, {
        title: '起始日期',
        dataIndex: 'startDate',
        align: 'center',
      }, {
        title: '操作',
        key: 'action',
        align: 'center',
        className: 'hwt',
        width: 150,
        render: (text, record) => (
          <span>
            <Tooltip title="续作">
              <Icon type="smile-o" onClick={() => this.handleConfirm(record)} />
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="编辑">
              <Icon type="edit" onClick={() => { this.handleEdit(record) }} />
            </Tooltip>
          </span>
        ),
      },
    ],
  };
  singleDialog = React.createRef();
  MixDialog = React.createRef();
  htTableRef = React.createRef();
  htFrom = React.createRef();
  EditDialog = React.createRef();
  CompresiveCreditRef = React.createRef();
  creditFormRef = React.createRef();
  // 续作
  handleConfirm = (row) => {
    axios({
      url: `${process.env.AJAX_SX_PREFIX}/limitApplyService/creditApply`,
      method: 'post',
      data: {
        customerId: row.customerId,
        operateType: '2',
        limitId: row.limitId,
      },
    }).then(res => {
      this.props.history.push({
        pathname: '/limit-details',
        query: Object.assign({}, { customerId: row.customerId }, res.data.data),
      })
    })
  }
  // 编辑
  handleEdit = (row) => {
    this.EditDialog.current.show(row);
  }
  // 新增单笔单批
  handleSingleDialog = () => {
    this.singleDialog.current.show()
  }
  // 新增综合授信
  handleMixDialog = () => {
    this.creditFormRef.current.handleShowDialog()
  }
  handleSearch = (values) => {
    // console.log(values, 1)
    for (const key in values) {
      if (values[key] === undefined) {
        const value = values;
        const keys = key;
        value[keys] = '';
      }
    }
    this.setState({
      ruleForm: Object.assign(this.state.ruleForm, values),
    }, () => {
      this.htTableRef.current.handleGetPaginationInfo()
    })
  }
  handleReset = () => {
    this.setState({
      ruleForm: Object.assign(this.state.ruleForm, { customerId: '', customerName: '', limitId: '', status: '2' }),
    }, () => {
      this.htTableRef.current.handleGetPaginationInfo()
    })
  }
  handleRefresh = () => {
    this.htTableRef.current.handleGetPaginationInfo();
  }
  render() {
    const ajaxConfig = {
      url: `/api/limitManageService/queryList`,
      method: 'GET',
      params: this.state.ruleForm,
    };
    const formConfig = {
      formConfig: [
        {
          component: Input,
          label: '客户编号',
          fieldName: 'customerId',
        },
        {
          component: Input,
          label: '客户名称',
          fieldName: 'customerName',
        },
        {
          component: Input,
          fieldName: 'limitId',
          label: '额度编号',
        },
        {
          fieldName: 'status',
          label: '状态',
          select: true,
          initialValue: "2",
          instance: (
            <Select style={{ width: '100%' }} allowClear>
              <Option value='1'>生效</Option>
              <Option value='2'>失效</Option>
              <Option value='3'>待生效</Option>
            </Select>
          ),
        },
      ],
      colNum: 2,
      align: 'center',
      htFormRef: form => { this.htFrom = form },
      onSubmit: (values) => {this.handleSearch(values)},
      handleReset: () => {this.handleReset()}
    }

    return (
      <PageHeader title="额度管理">
        <div className="quota-box">
          <div className="button-group">
            <Button type="primary" className="button-dia" onClick={this.handleMixDialog}>新建综合授信</Button>
            <Button type="primary" className="button-dia" onClick={this.handleSingleDialog}>新增单笔单批</Button>
            <Button type="primary" className="button-dia">单笔单批变更</Button>
          </div>
          <Card>
            <HtForm {...formConfig} htFormRef={form => { this.htFrom = form }} />
          </Card>
          <br />
          <Card>
            <HtTable ref={this.htTableRef} ajaxConfig={ajaxConfig} {...this.tableColumn} />
          </Card>
          <SingleDialog ref={this.singleDialog} />
          {/* <MixDialog ref={this.MixDialog} /> */}
          <EditDialog ref={this.EditDialog} onSuccess={this.handleRefresh} />
          <CompresiveCredit ref={this.CompresiveCreditRef} wrappedComponentRef={this.creditFormRef}/>
        </div>
      </PageHeader>
    )
  };
}