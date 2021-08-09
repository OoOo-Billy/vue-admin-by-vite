<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <template v-for="item in list">
      <el-breadcrumb-item :to="{ path: item.path }">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationMatched } from 'vue-router';

const list: Ref<RouteLocationMatched[]> = ref([]);
const route = useRoute();

const isRoot = (route: RouteLocationMatched): boolean | void => {
  const name = route.name as string;
  return name?.trim().toLocaleLowerCase() === 'overview';
};

watchEffect(
  () => {
    let matched = route.matched.filter(item => item?.meta?.title);
    const first = matched[0];
    if (!isRoot(first)) {
      matched = [
        {
          path: '/',
          meta: { title: '首页' },
        } as unknown as RouteLocationMatched,
      ].concat(matched);
    }
    list.value = matched;
  },
  { flush: 'post' }
);
</script>
