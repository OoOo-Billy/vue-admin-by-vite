<template>
  <!-- Sidebar -->
  <SideBar />
  <!-- MainBody -->
  <div>
    <router-view />
  </div>
  <!-- Other -->
  <div>333</div>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue';
</script>

<style scoped></style>
