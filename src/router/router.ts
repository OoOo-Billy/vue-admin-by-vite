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
        component: () => import('@/views/overview.vue'),
        meta: {
          icon: 'el-icon-monitor',
          title: '首页',
        },
      },
    ],
  },
];
