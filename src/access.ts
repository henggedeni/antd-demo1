export default (
  initialState: { currentUser?: API.CurrentUser } | undefined,
) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  const { currentUser } = initialState ?? {};
  const canSeeAdmin = !!(currentUser && currentUser.access === 'admin');
  return {
    canSeeAdmin,
  };
};
