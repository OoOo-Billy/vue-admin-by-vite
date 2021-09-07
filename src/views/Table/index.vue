<template>
  <SearchForm :rule="formRule" @search="search" />
  <br />
  <el-card>
    {{ pagination.page }}/{{
      Math.ceil(pagination.total / pagination.pageSize)
    }}
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SearchForm from '@/components/SearchForm';
import type { SearchFormRule } from '@/components/SearchForm/form';
import { getMajors, getStudents } from '@/api/school';

const majors = ref<SelectOption[]>([]);

const formRule: SearchFormRule[] = [
  {
    field: 'student',
    label: '学生姓名',
    type: 'input',
    placeholder: '按姓名搜索',
  },
  {
    field: 'gender',
    label: '性 别',
    type: 'select',
    placeholder: '按性别搜索',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
    ],
  },
  {
    field: 'major',
    label: '专 业',
    type: 'select',
    placeholder: '按专业搜索',
    options: majors,
    props: {
      filterable: true,
    },
  },
  {
    field: 'studentClass',
    label: '班 级',
    type: 'select',
    placeholder: '按班级搜索',
    options: [
      { label: '一班', value: '1' },
      { label: '二班', value: '2' },
      { label: '三班', value: '3' },
    ],
  },
  {
    field: 'score',
    label: '成 绩',
    type: 'select',
    placeholder: '按成绩搜索',
    options: [
      { label: '不及格', value: '0-59' },
      { label: '一般', value: '60-79' },
      { label: '良好', value: '80-89' },
      { label: '优秀', value: '90-100' },
    ],
  },
];

const tableData = ref<Student[]>([]);
const pagination = reactive({ page: 1, pageSize: 10, total: 0 });

(async function () {
  try {
    const res = await getMajors();
    majors.value = res.map(item => ({
      label: item.majorName,
      value: item.majorCode,
    }));
  } catch {}
})();

const search = async (form: Record<string, unknown>) => {
  try {
    const res = await getStudents({
      ...form,
      pagination: { page: 1, pageSize: 10 },
    } as unknown as GetStudentParams);
    tableData.value = res.list;
    pagination.page = res.currentPage;
    pagination.pageSize = res.pageSize;
    pagination.total = res.total;
  } catch {}
};
</script>
