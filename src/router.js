import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);

export default new Router({
  routes: [
    {
      path: '/hello_world',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
});
