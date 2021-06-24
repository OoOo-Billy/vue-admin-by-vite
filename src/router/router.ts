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
        meta: {},
      },
    ],
  },
];
