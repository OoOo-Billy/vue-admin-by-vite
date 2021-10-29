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
        path: 'overview',
        name: 'overview',
        meta: {
          icon: 'el-icon-monitor',
          title: '首页',
        },
        component: () => import('@/views/Overview.vue'),
      },
      {
        path: 'demo-table',
        name: 'demo-table',
        meta: {
          icon: 'el-icon-document',
          title: '表格页',
        },
        component: () => import('@/views/Table/index.vue'),
      },
      {
        path: 'demo-form',
        name: 'demo-form',
        meta: {
          icon: 'el-icon-document',
          title: '表单页',
        },
        component: () => import('@/views/Form/index.vue'),
      },
      {
        path: '/test-view',
        name: 'test-view',
        meta: {
          icon: 'el-icon-brush',
          title: '开发页',
        },
        component: () => import('@/views/Test'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
  },
];
