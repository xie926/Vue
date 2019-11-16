<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button class="go" @click="goGo">前进</button>
      <button class="back" @click="goBack">后退</button>
      <button class="goHome" @click="goHome">回到首页</button>
    </div>
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
      <router-link to="/Main">Main</router-link>
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
      <!-- <router-view name="left" style="float：left; width: 100%; height: 100px; background: #ccc; display: inline-block;"/>
      <router-view name="right" style="float：left; width: 100%; height: 100px; background: #c0c; display: inline-block;"/> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goGo(){
      this.$router.go(1)
    },
    goBack(){
      this.$router.go(-1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
