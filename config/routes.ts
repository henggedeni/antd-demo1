export default [
  {
    path: '/',
    redirect: '/home',
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
