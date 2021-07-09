<template>
  <div class="navbar-wrapper">
    <!-- 折叠 -->
    <Hamburger />

    <!-- 面包屑 -->
    <Breadcrumb />

    <!-- 右侧按钮 -->
    <div></div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from './Hamburger.vue';
import Breadcrumb from './Breadcrumb.vue';
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  display: flex;
}
</style>
