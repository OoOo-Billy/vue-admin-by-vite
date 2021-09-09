<template>
  <SearchForm :rule="formRule" @submit="search" @reset="search" />
  <br />
  <el-card>
    <el-table :data="tableData">
      <el-table-column
        v-for="item in tableColumn"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :formatter="item.formatter"
      ></el-table-column>
    </el-table>
    <br />
    <el-pagination
      v-model:currentPage="pagination.page"
      v-model:pageSize="pagination.pageSize"
      :total="pagination.total"
      layout="total,->,sizes,prev,pager,next,jumper"
    ></el-pagination>
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue';
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
const tableColumn: TableColumnConfig[] = [
  { label: '姓名', prop: 'name' },
  {
    label: '性别',
    prop: 'gender',
    formatter(_, __, value) {
      return { male: '男', female: '女' }[value] ?? '';
    },
  },
  {
    label: '专业',
    prop: 'major',
    formatter(_, __, value) {
      return majors.value.find(item => item.value === value)?.label ?? '';
    },
  },
  {
    label: '班级',
    prop: 'studentClass',
    formatter(_, __, value) {
      switch (value) {
        case '1':
          return '一班';
        case '2':
          return '二班';
        case '3':
          return '三班';
        default:
          return '';
      }
    },
  },
  { label: '成绩', prop: 'score' },
];

(async function () {
  try {
    const res = await getMajors();
    majors.value = res.map(item => ({
      label: item.majorName,
      value: item.majorCode,
    }));
  } catch {}
})();

const search = async (form: unknown = {}) => {
  try {
    const res = await getStudents({
      ...(form as Record<string, string>),
      pagination: { page: pagination.page, pageSize: pagination.pageSize },
    } as unknown as GetStudentParams);
    tableData.value = res.list;
    pagination.page = res.currentPage;
    pagination.pageSize = res.pageSize;
    pagination.total = res.total;
  } catch {}
};

watchEffect(() => {
  search();
});
</script>
