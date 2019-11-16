<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{$route.params.newsID}}-{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data(){
    return{
      msg: 'I am params page'
    }
  },
  beforeRouteEnter: (to,from,next) => {
    console.log('准备进入params模板');
    next();
  },
  beforeRouteLeave: (to,from,next) => {
    console.log('准备离开params模板');
    next();
  }
}
</script>

<style>

</style>