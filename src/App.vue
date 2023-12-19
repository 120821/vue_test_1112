<template>
  <!--<img alt="Vue logo" src="./assets/pink.webp">-->
  <!--<BlogList msg="blogs"/>                      -->
  <!--<HelloWorld msg="hello"/>                    -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--import BlogList from './components/BlogList.vue'    -->

export default {
  name: 'App',
  <!--components: {-->
  <!--  BlogList,  -->
  <!--  HelloWorld -->
  <!--}            -->
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

