<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{ $route.params.username}}-{{$route.params.age}}</p>
  </div>
</template>

<script>
export default {
  name: 'HiWorld1',
  data(){
    return{
      msg: 'I am HiWorld1 page'
    }
  }
}
</script>

<style>

</style>