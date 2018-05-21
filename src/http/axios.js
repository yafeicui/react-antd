import axios from 'axios';
// import qs from 'qs';
import { message } from 'antd';
// import { routerRedux } from 'dva/router';

export function createHttp(app) {
  initInterceptersRequest();
  initInterceptersResponse(app);
}

const initInterceptersRequest = () => {
  axios.interceptors.request.use(config => {
    const CONFIG = config;
    // if (CONFIG.url.indexOf('login') !== -1) {
    //   CONFIG.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    //   CONFIG.data = qs.stringify(CONFIG.data);
    // } else {
    //   const auth = localStorage.getItem('auth');
    //   if (auth) {
    //     CONFIG.headers.common.Authorization = auth;
    //   } else {
    //     routerRedux.push('/user/login');
    //   }
    // }
    return CONFIG;
  });
};

const initInterceptersResponse = app => {
  axios.interceptors.response.use(
    response => {
      if (Number(response.data.code) === 9000) {
        return response;
      } else if (Number(response.data.code) === 9303) {
        message.error(response.data.engMessage)
        return Promise.reject();
      }else{
        // message.error(response.data.message)
        // return Promise.reject(response.data.message);
      }
    },
    // error => {
    //   const dispatch = app._store.dispatch; // eslint-disable-line
    //   if (error.response.status === 403) {
    //     dispatch(routerRedux.push('/exception/403'));
    //   } else if (error.response.status === 404) {
    //     dispatch(routerRedux.push('/exception/404'));
    //   } else if (error.response.status === 500) {
    //     dispatch(routerRedux.push('/exception/500'));
    //   }
    //   return Promise.reject(error);
    // }
  );
};
