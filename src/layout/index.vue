<template>
  <!-- Sidebar -->
  <SideBar />
  <!-- MainBody -->
  <div class="main-container">
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
import SideBar from './components/sidebar/index.vue';
import NavBar from './components/navBar/index.vue';
</script>
