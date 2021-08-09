<template>
  <div class="side-bar-container">
    <Logo />
    <el-scrollbar noresiz view-style="height: 100%;">
      <el-menu unique-opened router>
        <SideBarItem v-for="item in STATIC_ROUTERS" :item="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { readonly } from 'vue';
import { staticRoutes } from '@/router';
import type { RouteRecordRaw } from 'vue-router';
import SideBarItem from './SidebarItem.vue';
import Logo from './Logo.vue';

const STATIC_ROUTERS = readonly<RouteRecordRaw[]>(staticRoutes);
</script>
