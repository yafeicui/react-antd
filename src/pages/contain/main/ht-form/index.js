import React, {Component} from 'react';
import CommontForm from '@/components/common-form';
import { Card, Input, Select} from 'antd';
import './index.css';

const { Option } = Select;

class HtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDict: [
        { dictValue: '1', dictLabel: '生效' },
        { dictValue: '2', dictLabel: '失效' },
        { dictValue: '3', dictLabel: '待生效'},
      ]
    }
  }
  handleSubmit = (values) => {
    console.log(values, 'handleSubmit');
  }
  handleReset = () => {
    console.log('重置表单');
  }
  render() {
    const formConfig = {
      formConfig: [
        {
          component: Input,
          label: '客户编号',
          fieldName: 'customerId',
          props: {
            placeholder: '客户编号'
          }
        }, {
          component: Input,
          label: '客户名称',
          fieldName: 'customerName',
          props: {
            placeholder: '客户名称'
          }
        }, {
          component: Input,
          label: '额度编号',
          fieldName: 'limitId',
          props: {
            placeholder: '额度编号'
          }
        }, {
          label: '状态',
          fieldName: 'status',
          instance: (
            <Select style={{ width: '100%' }} placeholder='状态' allowClear>
              <Option value='1'>生效</Option>
              <Option value='2'>失效</Option>
              <Option value='3'>待生效</Option>
            </Select>
          )
        },
      ], 
      onSubmit: (values) => {this.handleSubmit(values)},
      handleReset: () => {this.handleReset()},
      align: 'center',
      // buttonstyle: 'none',
      colNum: 2
    }
    const secondFormConfig = {
      formConfig: [
        {
          component: Input,
          label: '客户编号',
          fieldName: 'customerId',
          props: {
            placeholder: '客户编号'
          }
        }, {
          component: Input,
          label: '客户名称',
          fieldName: 'customerName',
          props: {
            placeholder: '客户名称'
          }
        }, {
          component: Input,
          label: '额度编号',
          fieldName: 'limitId',
          props: {
            placeholder: '额度编号'
          }
        }, {
          label: '状态',
          fieldName: 'status',
          instance: (
            <Select style={{ width: '100%' }} placeholder='状态' allowClear>
              <Option value='1'>生效</Option>
              <Option value='2'>失效</Option>
              <Option value='3'>待生效</Option>
            </Select>
          )
        },
      ],
      onSubmit: (values) => { this.handleSubmit(values) },
      handleReset: () => { this.handleReset() },
      align: 'center',
      // buttonstyle: 'none',
      colNum: 3
    }
    return (
      <div className="ht-form-box">
        <Card>
          <CommontForm {...formConfig} />
        </Card>
        <br />
        <Card>
          <CommontForm {...secondFormConfig} />
        </Card>
      </div>
    )
  }
}
export default HtForm;