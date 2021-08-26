<template>
  <div class="p-login">
    <el-card body-style="min-width: 470px;">
      <div class="login-panel__row">
        <h1>Admin System</h1>
      </div>
      <div class="login-panel__row">
        <el-input
          v-model="loginForm.id"
          prefix-icon="el-icon-user"
          type="text"
          placeholder="admin"
        />
      </div>
      <div class="login-panel__row">
        <el-input
          v-model="loginForm.pwd"
          prefix-icon="el-icon-key"
          type="password"
          placeholder="admin"
          show-password
        />
      </div>
      <div class="login-panel__row">
        <el-button type="primary" @click="login">登 录</el-button>
        <a href="javascript: void 0" @click="forget">忘记密码</a>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';

const store = useUserStore(),
  router = useRouter();

const loginForm = reactive({ id: 'admin', pwd: 'admin' });

const login = async () => {
  try {
    await store.login(loginForm);
    router.push({ name: 'home' });
  } catch {}
};
const forget = () => {
  loginForm.id = 'admin';
  loginForm.pwd = 'admin';
  ElNotification({
    title: '密码已重置',
    message: 'ID: admin, PWD: admin',
    type: 'success',
  });
};
</script>

<style lang="scss" scoped>
.p-login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  .login-panel__row {
    margin-bottom: 8px;
    &:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > a {
        color: $color-text-secondary;
      }
    }
  }
}
</style>
