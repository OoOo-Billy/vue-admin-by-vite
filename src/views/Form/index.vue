<template>
  <el-card>
    <p>登记</p>
    <el-form :model="formModel">
      <el-form-item label="Input">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitForm">登 记</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const formModel = reactive({
  studentName: '',
  gender: '',
  major: '',
  studentClass: '',
  score: '',
});

const onSubmitForm = () => {
  console.log('test', formModel);
};
</script>

<style lang="scss" scoped></style>
