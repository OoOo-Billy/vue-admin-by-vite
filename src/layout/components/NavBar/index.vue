<template>
  <div class="navbar-wrapper">
    <!-- 折叠 -->
    <Hamburger
      class="app-hamburger"
      :is-active="!store.sidebarCollapse"
      @toggle="toggleSidebar"
    />

    <!-- 面包屑 -->
    <Breadcrumb class="app-breadcrumb" />

    <!-- 右侧按钮 -->
    <div></div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from './Hamburger.vue';
import Breadcrumb from './Breadcrumb.vue';
import { useLayoutStore } from '@/store/modules/layout';

const store = useLayoutStore();

const toggleSidebar = () => {
  store.toggleCollapse();
};
</script>

<style lang="scss" scoped>
.app-hamburger,
.app-breadcrumb {
  float: left;
  line-height: $headerHeight;
}
.app-hamburger {
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
