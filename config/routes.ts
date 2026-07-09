export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '登录页',
    path: '/user/login',
    component: './user/login',
    layout: false,
  },
  {
    name: '首页',
    path: '/home',
    component: './home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './table',
  },
];
