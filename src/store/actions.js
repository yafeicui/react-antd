// actions.js
import axios from 'axios';
// action也是函数
export function setPageTitle(data) {
  // console.log(data, 333)
  return (dispatch, getState) => {
    dispatch({ type: "SET_PAGE_TITLE", data: data });
  };
}

export function setInfoList(data) {
  // console.log(data, 555);
  return (dispatch, getState) => {
    axios({
      url: '/api/table2'
    }).then(res => {
      data = [...res.data.data]
      dispatch({ type: "SET_INFO_LIST", data: data });
    })
  };
}

export function dayManageChangeMsg(data) {
  return (dispatch, getState) => {
    dispatch({ type: "CHANGE_DAYMANAGE_MSG", data: data });
  }
}

export function changeProgressPageMsg(data) {
  return (dispatch, getState) => {
    dispatch({type: 'CHANGE_PROGRESS_PAGE_DATA', data: data})
  }
}


