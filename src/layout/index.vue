<template>
  <!-- Sidebar -->
  <SideBar />
  <!-- MainBody -->
  <div :class="{ 'main-container': true, collapse: store.sidebarCollapse }">
    <div class="header">
      <!-- 顶部导航 -->
      <NavBar />
      <!-- Tags -->
      <div></div>
    </div>
    <router-view />
  </div>
  <!-- Other -->
  <!-- <div></div> -->
</template>

<script setup lang="ts">
import SideBar from './components/Sidebar/index.vue';
import NavBar from './components/NavBar/index.vue';
import { useLayoutStore } from '@/store/modules/layout';

const store = useLayoutStore();
</script>
