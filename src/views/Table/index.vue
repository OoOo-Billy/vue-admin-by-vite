<template>
  <SearchForm :rule="formRule" @submit="search" @reset="test2">1</SearchForm>
  <br />
  <el-card>table page.</el-card>
</template>

<script setup lang="ts">
import SearchForm from '@/components/SearchForm';
import type { SearchFormRule } from '@/components/SearchForm/form';

const formRule: SearchFormRule[] = [
  {
    field: 'name',
    label: '活动名称',
    type: 'input',
    placeholder: '请输入名称',
  },
];

const search = (form: unknown) => {
  console.log('submit form:', form);
};
const test2 = () => {
  console.log('reset form');
};
</script>

<style lang="scss" scoped></style>
