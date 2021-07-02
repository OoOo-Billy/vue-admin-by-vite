<template>
  <el-submenu :index="item.name" v-if="item.children && item.meta">
    <template #title>
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span>{{ item.meta.title }}</span>
    </template>
    <sidebar-item v-for="child in item.children" :item="child" />
  </el-submenu>
  <router-link :to="item.path" v-else-if="item.meta">
    <el-menu-item :index="item.name">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType, DeepReadonly } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
defineProps({
  item: {
    type: Object as PropType<DeepReadonly<RouteRecordRaw>>,
    required: true,
  },
});
</script>
