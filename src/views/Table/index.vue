<template>
  <SearchForm :rule="formRule" @search="search" />
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

const search = (form: Record<string, unknown>) => {
  console.log('submit form:', form);
};
</script>

<style lang="scss" scoped></style>
