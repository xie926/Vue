<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/Hiworld">HiWorld 页面</router-link>
      <router-link :to="{name: 'HiWorld1', params: {username: 'XY', age: 18}}">HiWorld1 页面</router-link>
      <router-link to="/Hiworld/HiWorld2">HiWorld2 页面</router-link>
      <router-link to="/Params/198/Xy fighting">Params 页面</router-link>
      <router-link to="/GoHome">GoHome</router-link>
      <router-link to="/GoParams/985/dream">GoParams</router-link>
      <router-link to="/Hi3">Hi3 页面</router-link>
      <router-link to="/HiHi">HiHi</router-link>
    </div>
    <p>{{$route.name}}</p>
    <router-view/>
    <router-view name="left" style="float：left; width: 50%; height: 300px; background: #ccc;"/>
    <router-view name="right" style="float：left; width: 50%; height: 300px; background: #c0c;"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
