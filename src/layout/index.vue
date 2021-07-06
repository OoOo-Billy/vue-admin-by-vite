<template>
  <!-- Sidebar -->
  <SideBar />
  <!-- MainBody -->
  <div class="main-container">
    <router-view />
  </div>
  <!-- Other -->
  <!-- <div></div> -->
</template>

<script setup lang="ts">
import SideBar from './components/sidebar/index.vue';
</script>
