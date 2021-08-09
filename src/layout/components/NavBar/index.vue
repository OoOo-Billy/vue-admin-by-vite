<template>
  <div class="navbar-wrapper">
    <!-- 折叠 -->
    <Hamburger class="app-hamburger" />

    <!-- 面包屑 -->
    <Breadcrumb class="app-breadcrumb" />

    <!-- 右侧按钮 -->
    <div></div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from './Hamburger.vue';
import Breadcrumb from './Breadcrumb.vue';
</script>

<style lang="scss" scoped>
.app-hamburger,
.app-breadcrumb {
  float: left;
  line-height: $headerHeight;
}
</style>
