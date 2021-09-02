import { MockMethod } from 'vite-plugin-mock';
import majors from './json/major.json';

const m = [];
for (const key in majors) {
  m.push({ majorCode: key, majorName: majors[key] });
}

const SCHOOL_DATA = {
  students: [],
  majors: m,
};

const major: MockMethod = {
  url: '/api/school/getMajors',
  method: 'get',
  response: () => {
    return {
      code: 'SUCCESS',
      data: SCHOOL_DATA.majors,
      message: '操作成功',
    };
  },
};

export default [major];
