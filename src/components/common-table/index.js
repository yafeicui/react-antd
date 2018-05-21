import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import HtTableConfig from './config';
import './index.css';

const { table, pagination, paginationKey, listKey } = HtTableConfig;

export default class HtTable extends Component {
  state = {
    tableState: {
      dataSource: table.dataSource,
      columns: this.props.columns || table.columns,
      rowKey: table.rowKey,
      loading: table.loading,
    },
    pagination: {
      pageSize: pagination.pageSize,
      current: pagination.current,
      total: pagination.total,
      showSizeChanger: pagination.showSizeChanger,
      showTotal: pagination.showTotal,
      onChange: page => {
        this.setState(prevState => {
          const state = prevState
          state.pagination.current = page;
          return {
            pagination: state.pagination,
          };
        }, () => {
          this.handleGetPaginationInfo()
        });
      },
      onShowSizeChange: (current, size) => {
        this.setState(prevState => {
          const state = prevState
          state.pagination.current = current;
          state.pagination.pageSize = size;
          return {
            pagination: state.pagination,
          };
        }, () => {
          this.handleGetPaginationInfo()
        });
      },
    },
  };

  componentDidMount() {
    if (this.props.automatic !== false) {
      this.handleGetPaginationInfo();
    }
  };

  handleGetPaginationInfo = () => {
    // 开启loading
    this.setState(prevState => {
      const state = prevState;
      state.tableState.loading = true;
      return {
        tableState: state.tableState,
      };
    });

    const ajaxConfig = Object.assign({}, this.props.ajaxConfig);

    // 分页参数
    const pagiantionParams = {};
    if (this.props.pagination !== false) {
      // 每页的大小
      pagiantionParams[paginationKey.size] = this.state.pagination.pageSize;
      // 当用页数分页的时候
      if (paginationKey.currPage) {
        pagiantionParams[paginationKey.currPage] = this.state.pagination.current - 1;
      }
      // 当用offset分页的时候
      if (paginationKey.offset) {
        pagiantionParams[paginationKey.offset] = (this.state.pagination.current - 1) * this.state.pagination.pageSize;
      }
    }
    // 合并请求的参数
    ajaxConfig.params = Object.assign({}, ajaxConfig.params, pagiantionParams);

    axios(ajaxConfig).then(res => {
      this.setState(prevState => {
        const state = prevState;
        // 关闭loading
        state.tableState.loading = false;
        // 有数据的情况
        if (res.data && res.data.data) {
          const dataNode = res.data.data
          // 有分页的情况
          if (dataNode[listKey]) {
            state.tableState.dataSource = dataNode[listKey];
            state.pagination.total = Number(dataNode[paginationKey.total]);
          } else {
            state.tableState.dataSource = res.data.data; // 无分页的情况
          }
        } else {
          state.tableState.dataSource = []; // 没有数据的情况
        }
        return {
          tableState: state.tableState,
          pagination: state.pagination,
        };
      });
    });
  };

  handleDelete = (options) => {
    const ajaxConfig = Object.assign({}, options, {
      method: 'DELETE',
    });
    axios(ajaxConfig).then(() => {
      this.handleGetPaginationInfo()
    });
  };

  render() {
    return <Table {...this.state.tableState} pagination={this.props.pagination === false ? false : this.state.pagination} />;
  };
}
