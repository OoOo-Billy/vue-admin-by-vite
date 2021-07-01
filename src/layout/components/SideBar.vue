<template>
  <div class="side-bar-container">
    <div class="tesx">i'm logo</div>
    <el-scrollbar>
      <el-menu>
        <template v-for="item in STATIC_ROUTERS">
          <el-submenu :index="item.name" v-if="item.children">
            <template #title>
              <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
              <span>{{ item.meta && item.meta.title }}</span>
            </template>
            <el-menu-item v-for="i in item.children" :index="i.name">
              <i v-if="i.meta && i.meta.icon" :class="i.meta.icon"></i>
              <template #title>
                <span>{{ i.meta && i.meta.title }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.name" v-else>
            <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
            <template #title>
              <span>{{ item.meta && item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { readonly } from 'vue';
import { staticRoutes } from '@/router';
const STATIC_ROUTERS = readonly(staticRoutes);
</script>

<style lang="scss" scoped>
.side-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  // width: 210px;
}
</style>
