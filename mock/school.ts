import { MockMethod } from 'vite-plugin-mock';
import { MockResponseOption } from './mock.d';
import majors from './json/major.json';

const m = [];
for (const key in majors) {
  m.push({ majorCode: key, majorName: majors[key as keyof typeof majors] });
}

const generateStudentList = (count: number): Student[] => {
  const result: Student[] = [],
    firstName = [
      '赵',
      '钱',
      '孙',
      '李',
      '周',
      '吴',
      '郑',
      '王',
      '冯',
      '陈',
      '褚',
      '卫',
      '蒋',
      '沈',
      '韩',
      '杨',
      '朱',
      '秦',
      '尤',
      '许',
      '何',
      '吕',
      '施',
      '张',
    ],
    secondName = [
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '壹',
      '贰',
      '叁',
      '肆',
      '伍',
      '陆',
      '柒',
      '捌',
      '玖',
      '拾',
    ],
    thirdName = [
      '风',
      '花',
      '雪',
      '月',
      '春',
      '夏',
      '秋',
      '冬',
      '梅',
      '兰',
      '竹',
      '菊',
      '恭',
      '喜',
      '发',
      '财',
    ];
  const createStudent = (): Student => ({
    name: `${firstName[Math.floor(Math.random() * firstName.length)]}${
      secondName[Math.floor(Math.random() * secondName.length)]
    }${thirdName[Math.floor(Math.random() * thirdName.length)]}`,
    gender: ['male', 'female'][Math.round(Math.random())],
    major: ['010101', '020101', '050101', '050201', '080901'][
      Math.floor(Math.random() * 4)
    ],
    studentClass: `${Math.ceil(Math.random() * 3)}`,
    score: Math.ceil(Math.random() * 100),
  });

  for (let i = 0; i < count; i++) {
    result.push(createStudent());
  }

  return result;
};

const SCHOOL_DATA = {
  students: generateStudentList(95),
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
    const {
      student,
      gender,
      major,
      studentClass,
      score,
      pagination: { page, pageSize },
    } = opt.body;

    const result: Student[] = SCHOOL_DATA.students.filter(s => {
      return (
        (!student || s.name.indexOf(student) > -1) &&
        (!gender || s.gender === gender) &&
        (!major || s.major === major) &&
        (!studentClass || s.studentClass === studentClass) &&
        (!score ||
          (score.split('-')[0] <= s.score && s.score <= score.split('-')[1]))
      );
    });

    const beginIndex = (page - 1) * pageSize;

    return {
      code: 'SUCCESS',
      data: {
        list: result.slice(beginIndex, beginIndex + pageSize),
        currentPage: page,
        pageSize,
        total: result.length,
      },
      message: '操作成功',
    };
  },
};

export default [getMajor, getStudent];
