import React, { Component } from "react";
import "./index.css";
import {Button} from 'antd';
import PageHeader from "@/components/page-title";

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux';
// 引入action
import { setPageTitle, setInfoList } from '@/store/actions.js'

class ParamsManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDict: [],
      infoList: [],
      pageTitle: "银行"
    };
  }
  componentWillMount() {
    let { setInfoList, pageTitle } = this.props;
    // setPageTitle("");
    this.setState({ pageTitle: pageTitle });
    setInfoList();
  }
  changeReduxTitle = () => {
    this.setState((prevState) => {
      return {
        pageTitle: prevState.pageTitle + '我'
      }
    },() => {
      let { setPageTitle } = this.props;
      setPageTitle(this.state.pageTitle);
    })
  }
  render() {
    let { pageTitle, infoList } = this.props;
    return (
      <PageHeader title={pageTitle}>
        <Button type="primary" onClick={this.changeReduxTitle}>
          改变redux
        </Button>
        {/* <div> */}
        {infoList.map(ele => {
          return (
            <div key={ele.key}>
              <span>
                {ele.name} - {ele.age} - {ele.address}
              </span>
            </div>
          );
        })}
        {/* </div> */}
      </PageHeader>
    );
  }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch) => {
  return {
    setPageTitle (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setPageTitle(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    setInfoList (data) {
        dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParamsManage)
