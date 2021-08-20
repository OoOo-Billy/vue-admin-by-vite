<template>
  <div :class="{ 'side-bar-container': true, collapse: store.sidebarCollapse }">
    <el-scrollbar noresiz view-style="height: 100%;">
      <el-menu unique-opened router :collapse="store.sidebarCollapse">
        <div class="logo-wrapper">
          <Logo />
        </div>
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
import { useLayoutStore } from '@/store/modules/layout';

const STATIC_ROUTERS = readonly<RouteRecordRaw[]>(staticRoutes);

const store = useLayoutStore();
</script>
