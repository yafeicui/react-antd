const menuData = [
  {
    name: '我的任务',
    icon: 'user',
    path: 'task',
  },
  {
    name: '额度管理',
    icon: 'gift',
    path: 'quota-manage',
  },
  {
    name: '日常管理',
    icon: 'frown',
    path: 'daily-mgr',
    children: [
      {
        name: '额度台账',
        path: 'limit-book',
  
      },
      {
        name: '进件查询',
        path: 'article-query',
  
      },
    ],
  },
  {
    name: '参数管理',
    icon: 'meh',
    path: 'config-mgr',
  },
  {
    name: '客户管理',
    icon: 'smile',
    path: 'customer-mgr',
    children: [
      {
        name: '对公客户',
        path: 'to-business',
  
      },
      {
        name: '对私客户',
        path: 'to-personal',
  
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    children: [
      {
        name: '登录',
        path: 'login',
  
      },
    ],
  },
  {
    name: 'Moon',
    icon: 'warning',
    path: 'moon',
    children: [
      {
        name: 'table',
        path: 'table',
  
      },
      {
        name: 'form',
        path: 'form',
  
      },
    ],
  },
  {
    name: 'HWT',
    icon: 'star-o',
    path: 'hwt',
    children: [
      {
        name: '用户列表',
        path: 'users',
  
      },
    ],
  },
  {
    name: 'ht-form',
    icon: 'star-o',
    path: 'form',
    children: [
      {
        name: 'ht-form',
        path: 'ht-form',
      },
    ],
  }
]
export default menuData;
