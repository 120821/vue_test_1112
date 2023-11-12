import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import BlogList from './components/BlogList.vue';
import Blog from './components/Blog.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/hello_world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
  ]
});
