import { MockMethod } from 'vite-plugin-mock';

const login: MockMethod = {
  url: '/api/account/login',
  method: 'post',
  response: opt => {
    const { id, pwd } = opt.body;
    if (id !== 'admin' || pwd !== 'admin') {
      return {
        code: 'FAIL',
        data: null,
        message: '帐号或密码错误',
      };
    }
    return {
      code: 'SUCCESS',
      data: {
        nickname: 'Administrator',
        authority: 'supper-admin',
        id: 'admin',
      },
      message: '操作成功',
    };
  },
};

const logout: MockMethod = {
  url: '/api/account/logout',
  method: 'get',
  response: () => ({
    code: 'SUCCESS',
    message: '操作成功',
  }),
};

export default [login, logout];
