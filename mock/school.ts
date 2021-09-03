import { MockMethod } from 'vite-plugin-mock';
import { MockResponseOption } from './mock.d';
import majors from './json/major.json';

const m = [];
for (const key in majors) {
  m.push({ majorCode: key, majorName: majors[key as keyof typeof majors] });
}

const SCHOOL_DATA = {
  students: [],
  majors: m,
};

// 查询所有专业
const getMajor: MockMethod = {
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

// 查询学生
const getStudent: MockMethod = {
  url: '/api/school/getStudent',
  method: 'post',
  response: (opt: MockResponseOption) => {
    const { student, gender, major, studentClass, score } = opt.body;
    // TODO mock students data.
  },
};

export default [getMajor];
