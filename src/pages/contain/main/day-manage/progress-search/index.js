import React, { Component } from "react";
import "./index.css";
import { Button } from "antd";
import PageHeader from "@/components/page-title";
import {connect} from 'react-redux';
import {changeProgressPageMsg} from '@/store/actions.js';

class ProgressSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageMsg: '',
      pageTitle: ''
    }
  }
  componentWillMount() {
    let { pageMsg, pageTitle } = this.props;
    this.setState({
      pageMsg: pageMsg,
      pageTitle: pageTitle
    })
  } 
  changepageMsgs = () => {
    this.setState((preState) => {
      return {
        pageMsg: preState.pageMsg + '哦'
      }
    }, () => {
      let {changeProgressPageMsg} = this.props;
      changeProgressPageMsg(this.state.pageMsg)
    })
  }
  render() {
    let { pageMsg } = this.props;
    return <PageHeader title="进度查询">
        <Button onClick={this.changepageMsgs}>改变数据</Button>
        <div>{this.state.pageMsg}</div>
        <div>{this.state.pageTitle}</div>
        <hr />
        <div>{pageMsg}</div>
      </PageHeader>;
  }
}

const mapStateToProps = (state) => {
  return {
    pageMsg: state.pageMsgs,
    pageTitle: state.pageTitle
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeProgressPageMsg(data) {
      dispatch(changeProgressPageMsg(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProgressSearch);