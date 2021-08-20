import { MockMethod } from 'vite-plugin-mock';
import { MockResponseOption } from './mock.d';

const login: MockMethod = {
  url: '/api/account/login',
  method: 'post',
  response: (opt: MockResponseOption) => {
    const { id, pwd } = opt.body;
    if (id !== 'admin' || pwd !== 'admin') {
      return {
        code: 'FAIL',
        data: null,
        message: 'Invalid id or pwd.',
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

export default [login];
