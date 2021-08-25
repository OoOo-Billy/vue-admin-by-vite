import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import routes from './router';
import { useUserStore } from '@/store/modules/user';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const store = useUserStore();
  to.name === 'login' || store.id ? next() : next({ name: 'login' });
});

export default router;
export const staticRoutes: RouteRecordRaw[] = routes[0].children || [];
