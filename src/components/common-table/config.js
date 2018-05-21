export default {
  table: {
    dataSource: [],
    columns: [],
    rowKey: 'id',
    loading: false,
  },
  pagination: {
    pageSize: 10,
    current: 1,
    total: 0,
    showSizeChanger: true,
    showTotal: total => `共${total}条`,
  },
  paginationKey: {
    size: "size",
    currPage: "page",
    // offset: "offset",
    total: "totalElements",
  },
  listKey: "content",
}