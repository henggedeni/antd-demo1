const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

let access = '';

const currentUserData: API.CurrentUser = {
  name: 'Admin',
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  email: 'antdesign@alipay.com',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  tags: [
    { key: '0', label: '很有想法的' },
    { key: '1', label: '专注设计' },
    { key: '2', label: '辣~' },
    { key: '3', label: '大长腿' },
    { key: '4', label: '川妹子' },
    { key: '5', label: '海纳百川' },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  access: 'admin',
  geographic: {
    province: { label: '浙江省', key: '330000' },
    city: { label: '杭州市', key: '330100' },
  },
  address: '西湖区工专路 77 号',
  phone: '0752-268888888',
};

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  'GET /api/currentUser': (req: any, res: any) => {
    if (!access) {
      res.status(401);
      res.send({
        data: { isLogin: false },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
      });
      return;
    }
    res.send({
      success: true,
      data: currentUserData,
    });
  },
  'POST /api/login/account': async (req: any, res: any) => {
    const { password, username, type } = req.body;
    if (password === 'ant.design' && username === 'admin') {
      access = 'admin';
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === 'ant.design' && username === 'user') {
      access = 'user';
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }
    access = '';
    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/login/outLogin': (_req: any, res: any) => {
    access = '';
    res.send({ data: {}, success: true });
  },
};
