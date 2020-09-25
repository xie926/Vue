<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-item path='/home' activeColor="green">
        <i class="iconfont" slot="icon">&#xe624;</i>
        <i class="iconfont" slot="icon-active">&#xe623;</i>
        <div slot="text">首页</div>
      </tab-item>
      <tab-item path='/category'>
        <i class="iconfont" slot="icon">&#xe61e;</i>
        <i class="iconfont" slot="icon-active">&#xe61c;</i>
        <div slot="text">功能</div>
      </tab-item>
      <tab-item path='/cart'>
        <i class="iconfont" slot="icon">&#xe61f;</i>
        <i class="iconfont" slot="icon-active">&#xe61d;</i>
        <div slot="text">购物车</div>
      </tab-item>
      <tab-item path='/profile'>
        <i class="iconfont" slot="icon">&#xe626;</i>
        <i class="iconfont" slot="icon-active">&#xe625;</i>
        <div slot="text">我的</div>
      </tab-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabItem from '@/components/tabbar/TabItem'
export default {
  name: "App",
  components:{
    TabBar,
    TabItem
  }
};
</script>

<style>
@import "./assets/base.css";

</style>
