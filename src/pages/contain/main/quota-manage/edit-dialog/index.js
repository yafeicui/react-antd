import React, { Component } from 'react';
import moment from 'moment';
import { Tabs, DatePicker, Input, Select, message} from 'antd';
import CommonDialog from '@/components/common-dialog';
import EditForm from '@/components/common-form';

const { TabPane } = Tabs;
const { Option } = Select;
class SingleDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    }
  }
  singleDialog = React.createRef();
  userForm = React.createRef();
  show = (row) => {
    this.setState({
      formData: Object.assign({}, row),
    }, () => {
      this.singleDialog.current.show();
    })
  }
  handleSubmit = () => {
    console.log(this.userForm.current,'提交');
    this.singleDialog.current.hiddle();
  }
  handleDiaCancel = () => {
    message.info('取消编辑');
    this.singleDialog.current.hiddle();
  }
  handleSubmitDia = () => {
    console.log(this.userForm.current, 89999)
    console.log(123)
  }
  render() {
    const modelConfig = {
      width: 800,
      title: '编辑用户',
    }
    const formConfig = {
      formConfig: [
        {
          component: Input,
          label: '客户名称',
          fieldName: 'customerName',
          initialValue: this.state.formData.customerName,
        }, {
          component: Input,
          label: '客户编号',
          fieldName: 'customerId',
          initialValue: this.state.formData.customerId,
        }, {
          component: Input,
          label: '额度编号',
          fieldName: 'limitId',
          initialValue: this.state.formData.limitId,
        }, {
          label: '状态',
          fieldName: 'status',
          initialValue: this.state.formData.status,
          instance: (
            <Select style={{ width: '100%' }} allowClear>
              <Option value='1'>生效</Option>
              <Option value='2'>失效</Option>
              <Option value='3'>待生效</Option>
            </Select>
          )
        }, {
          component: Input,
          label: '总额度',
          fieldName: 'limitAmt',
          initialValue: this.state.formData.limitAmt,
        }, 
        {
          component: DatePicker,
          label: '起始日期',
          fieldName: 'startDate',
          props: {
            palceholder: ''
          },
          initialValue: this.state.formData.startDate ? moment(this.state.formData.startDate, 'YYYY-MM-DD') : '',
        },
      ],
      align: 'center',
      labelCol: 7,
      wrapperCol: 17,
      // buttonstyle: 'none',
      colNum: 2
    }
    return (
      <CommonDialog ref={this.singleDialog} {...modelConfig} handleOk={this.handleSubmit} handleCancel={this.handleDiaCancel} >
        <EditForm {...formConfig} ref={this.userForm} onSubmit={this.handleSubmitDia} />
      </CommonDialog>
    )
  }
}
export default SingleDialog;