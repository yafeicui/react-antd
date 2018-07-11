import React, { Component } from "react";
import "./index.css";
import { Button } from "antd";
import PageHeader from "@/components/page-title";

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux';
import { dayManageChangeMsg } from "@/store/actions.js";
class ParamsManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testMsg: "",
      pageMsg: ''
    };
  }
  componentWillMount() {
    let { testMsg, pageMsg } = this.props;
    this.setState({
      testMsg: testMsg,
      pageMsg: pageMsg
    })
  }
  changeMoneyMsg = () => {
    let { dayManageChangeMsg } = this.props;
    dayManageChangeMsg('改编后的数据');
  };
  render() {
    let { testMsg } = this.props;
    return <PageHeader title="额度台账">
        <div>111</div>
        <div>{testMsg}</div>
        <hr />
        <div>{this.state.pageMsg}</div>
        <Button onClick={this.changeMoneyMsg}>改变数据</Button>
      </PageHeader>;
  }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    testMsg: state.testMsg,
    pageMsg: state.pageMsgs
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch) => {
  return {
    dayManageChangeMsg (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(dayManageChangeMsg(data));
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParamsManage)
