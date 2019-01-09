/** @format */

export default [
  {
    path: '/',
    name: 'Layout',
    component: require('common/Layout.vue').default,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: require('home/Home.vue').default
      },
      {
        path: 'profile',
        name: 'profile',
        component: require('profile/Profile.vue').default
      },
      {
        path: 'project',
        name: 'project',
        component: require('project/Project.vue').default
      },
      {
        path: 'blog',
        name: 'blog',
        component: require('blog/Blog.vue').default
      }
    ]
  }
];
