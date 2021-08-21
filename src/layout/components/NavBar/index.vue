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

    <!-- 右侧操作菜单 -->
    <div class="slot-right">
      <!-- 消息通知 -->
      <div class="nav-bar__slot__ring"></div>
      <!-- 全屏切换 -->
      <div class="nav-bar__slot__fullscreen">
        <Fullscreen />
      </div>
      <!-- 管理员 -->
      <div class="nav-bar__slot__user">
        <Avatar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from './Hamburger.vue';
import Breadcrumb from './Breadcrumb.vue';
import Fullscreen from '@/components/Fullscreen';
import Avatar from '@/components/Avatar';
import { useLayoutStore } from '@/store/modules/layout';

const store = useLayoutStore();

const toggleSidebar = () => {
  store.toggleCollapse();
};
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  padding-right: 10px;
}
.app-hamburger,
.app-breadcrumb {
  float: left;
  line-height: $headerHeight;
}
.app-hamburger {
  @include hover-pointer;
}

.slot-right {
  float: right;
  display: flex;
  height: 100%;
  .nav-bar__slot__ring {
  }
  .nav-bar__slot__fullscreen {
    width: $headerHeight;
  }
  .nav-bar__slot__user {
    height: 100%;
    line-height: $headerHeight;
  }
}
</style>
