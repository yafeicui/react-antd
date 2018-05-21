import React, { Component } from 'react';
import { Table, Card, Input, Select } from 'antd';
import { withRouter } from 'react-router-dom';
import SearchForm from '@/components/common-form';
import axios from 'axios';
import './index.css';

const { Option } = Select;

class PublicSin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleForm: {
        custId: '',
        custName: '',
        certId: '',
        certType: '',
        custType: this.props.custType,
      },
      tableData: [],
      productArr: [],
      // selectDict: [],     
    }
  }
  htFrom = React.createRef();
  htTableRef = React.createRef();
  handleSearch = (values) => {
    for (const key in values) {
      if (values[key] === undefined) {
        const value = values;
        const keys = key;
        value[keys] = '';
      }
    }
    this.setState({
      ruleForm: Object.assign({}, this.state.ruleForm, values),
    }, () => {
      this.handleGetPaginationInfo();
    })
  }
  handleReset = () => {
    this.setState({
      ruleForm: {
        custId: '',
        custName: '',
        certId: '',
        certType: '',
        custType: this.props.custType,
      },
    }, () => {
      this.handleGetPaginationInfo();
    })
  }
  handleGetPaginationInfo = () => {
    axios({
      url: '/api/customerService/queryList',
      method: 'get',
      params: this.state.ruleForm,
    }).then(res => {
      const resData = res.data.data;
      this.setState({
        tableData: [...resData.content],
      })
    })
  }
  expendTable = (expanded) => {
    if (expanded) {
      axios({
        url: '/api/productService/queryProductList',
        method: 'get',
        params: {
          productLevel: '3',
          customerType: this.state.ruleForm.custType,
          singleApproveInd: '1',
        },
      }).then(res => {
        this.setState({
          productArr: [...res.data.data.content],
        })
      })
    }
  }
  clickProduct = (val, ele) => {
    axios({
      url: '/api/limitApplyService/creditApply',
      method: 'post',
      data: {
        customerId: val.custId,
        operateType: '4',
        productCd: ele.productCd,
      },
    }).then(res => {
      this.props.history.push({
        pathname: '/limit-details',
        query: Object.assign({}, { customerId: val.custId }, res.data.data),
      })
    })
  }
  render() {
    const formConfig = {
      formConfig: [
        {
          component: Input,
          label: '客户编号',
          fieldName: 'custId',
        },
        // {
        //   component: Input,
        //   label: '客户名称',
        //   fieldName: 'custName',
        // },
        // {
        //   component: Input,
        //   fieldName: 'certId',
        //   label: '证件号码',
        // },
        {
          fieldName: 'certType',
          label: '证件类型',
          select: true,
          // initialValue: "2",
          instance: (
            <Select style={{ width: '100%' }} allowClear>
              <Option value='1'>营业执照</Option>
              <Option value='2'>国税登记证</Option>
            </Select>
          ),
        },
      ],
      colNum: 2,
      labelCol: 8,
      wrapperCol: 16,
      align: 'center',
      htFormRef: form => { this.htFrom = form },
      onSubmit: (values) => { this.handleSearch(values) },
      handleReset: () => { this.handleReset() }
    }
    const tableColumn = {
      columns: [
        {
          title: '客户名称',
          dataIndex: 'custName',
          align: 'center',
          width: 70,
        }, {
          title: '客户编号',
          dataIndex: 'custId',
          align: 'center',
          width: 150,
        }, {
          title: '证件类型',
          dataIndex: 'certType',
          align: 'center',
          width: 150,
        }, {
          title: '证件号码',
          dataIndex: 'certId',
          align: 'center',
          width: 100,
        }
      ],
    };
    return (
      <div className="single-public">
        <Card>
          <SearchForm {...formConfig} />
        </Card>
        <br />
        <Card>
          <Table ref={this.htTableRef} {...tableColumn} 
            expandedRowRender={(record) => {
              return this.state.productArr.map(ele => {
                return (
                  <span key={ele.productCd} className='innerStyle' onClick={() => this.clickProduct(record, ele)}>{ele.productName}</span>
                )
              })
            }}
            dataSource={this.state.tableData}
            pagination={false}
            onExpand={this.expendTable}
          />
        </Card>
      </div>
    )
  }
}
export default withRouter(PublicSin);