// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from "redux";
// 默认值
import defaultState from "./state.js";
// 一个reducer就是一个函数
function pageTitle(state = defaultState.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  // console.log(action, 'reducer1')
  switch (action.type) {
    case "SET_PAGE_TITLE":
      return action.data;
    default:
      return state;
  }
}

function infoList(state = defaultState.infoList, action) {
  switch (action.type) {
    case "SET_INFO_LIST":
      return action.data;
    default:
      return state;
  }
}

function testMsg(state = defaultState.testMsg, action) {
  switch(action.type) {
    case 'CHANGE_DAYMANAGE_MSG': return action.data;
    default: return state;
  }
}

function pageMsgs(state = defaultState.pageMsgs, action) {
  switch(action.type) {
    case 'CHANGE_PROGRESS_PAGE_DATA': return action.data; 
    default: return state;
  }
}


// 导出所有reducer
export default combineReducers({
  pageTitle,
  infoList,
  testMsg,
  pageMsgs
});
