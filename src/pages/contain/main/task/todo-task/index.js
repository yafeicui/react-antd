import React, { Component } from 'react';
import { Input, Icon, Tooltip, Divider} from 'antd';
import { withRouter } from 'react-router-dom';
import HtTable from '@/components/common-table';
import ExportJsonExcel from 'js-export-excel';
import CommenForm from '../common-form';
import './index.css';

class ToDoTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleForm: {
        customerId: "",
        limitApplyId: "",
      },
    }
  }
  handleEdit = (row) => {
    // this.props.history.push({
    //   pathname: '/limit-details',
    //   query: {
    //     limitApplyId: row.limitApplyId,
    //     customerId: row.customerId,
    //     productCd: row.productCd,
    //   },
    // })
  }
  handleSubmit = (value) => {
    console.log(value, 8989)
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
  exportTable = (row) => {
    console.log(row, 111)
    var option={};
    let dataTable = [{'客户编号':row.customerId, '客户名称': row.customerName}];
    option.fileName = '项目统计'
    option.datas=[
      {
        sheetData:dataTable,
        sheetName:'sheet',
        sheetFilter:['客户编号','客户名称'],
        sheetHeader:['客户编号','客户名称'],
      }
    ];
    var toExcel = new ExportJsonExcel(option); //new
    toExcel.saveExcel();
  }
  htTable = React.createRef();
  render() {
    const tableConfig = {
      ajaxConfig: {
        url: `/api/flowService/queryWaitDoList`,
        method: 'get',
        params: this.state.ruleForm,
      },
      columns: [
        { title: '客户编号', dataIndex: 'customerId', align: 'center', width: 180  },
        { title: '额度编号', dataIndex: 'limitApplyId' , align: 'center', width: 200 },
        { title: '客户名称', dataIndex: 'customerName', align: 'center', width: 150  },
        { title: '产品名称', dataIndex: 'productName', align: 'center', width: 150  },
        // { title: '申请性质', dataIndex: 'limitNature', align: 'center', width: 130  },
        { title: '申请来源', dataIndex: 'channelCd', align: 'center', },
        { title: '申请时间', dataIndex: 'startTime', align: 'center', width: 150  },
        {
          title: '操作',
          width: 100,
          align: 'center',
          render: (text, record) => (
            <div>
              <Tooltip placement="topLeft" title="编辑">
                <Icon type="edit" onClick={() => this.handleEdit(text, record)} />
                <Divider type="vertical" />
                <span onClick={() => this.exportTable(record)}>导出</span>
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
      <div className="todo-task">
        <CommenForm {...formConfig} />
        <div className="table-top-div" />
        {/* <Card> */}
          <HtTable {...tableConfig} ref={this.htTable} />
        {/* </Card> */}
      </div>
    )
  }
}
export default withRouter(ToDoTask);
