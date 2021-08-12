/**
 * @meta {
 *   icon: '', // 导航菜单图标
 *   title: '', // 导航菜单、面包屑标题
 *   hidden: false, // 是否在导航菜单隐藏
 * }
 */
export default [
  {
    path: '/',
    name: 'home',
    redirect: '/overview',
    meta: {},
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/overview',
        name: 'overview',
        meta: {
          icon: 'el-icon-monitor',
          title: '首页',
        },
        component: () => import('@/views/Overview.vue'),
      },
      {
        path: '/test-view',
        name: 'test-view',
        meta: {
          icon: 'el-icon-panel',
          title: '开发页',
        },
        component: () => import('@/views/Test'),
      },
    ],
  },
];
