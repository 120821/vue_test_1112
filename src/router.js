import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import BlogList from './components/BlogList.vue';
import Blog from './components/Blog.vue';

const routes = [
  {
    path: '/hello_world',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/blog/:id',
    name: 'BlogList',
    component: BlogList,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
