import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import routes from './router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  to.name === 'login' || sessionStorage.getItem('id')
    ? next()
    : next({ name: 'login', replace: true });
});

export default router;
export const staticRoutes: RouteRecordRaw[] = routes[0].children || [];
