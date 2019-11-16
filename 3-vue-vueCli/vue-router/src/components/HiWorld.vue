<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HiWorld',
  data(){
    return{
      msg: 'I am HiWorld page'
    }
  }
}
</script>

<style>

</style>