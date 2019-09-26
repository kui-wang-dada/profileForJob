/** @format */

export default [
  {
    path: '/',
    name: 'Layout',
    component: require('common/Layout.vue').default,
    redirect: 'home',
    meta: { title: '王逵' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: require('home/Home.vue').default,
        meta: { title: '首页' }
      },
      {
        path: 'profile',
        name: 'profile',
        component: require('profile/Profile.vue').default,
        meta: { title: '个人简历' }
      },
      {
        path: 'project',

        component: require('project/Default.vue').default,
        meta: { title: '项目实例' },
        children: [
          {
            path: '/',
            name: 'project',
            component: require('project/Project.vue').default,
            meta: { title: '项目实例' }
          },
          {
            path: ':id',
            name: 'projectDetail',
            component: require('project/Detail.vue').default,
            meta: { title: '项目实例' }
          }
        ]
      }
    ]
  }
];
