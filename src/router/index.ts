import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import routes from './router';
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
export const staticRoutes: RouteRecordRaw[] = routes[0].children;
