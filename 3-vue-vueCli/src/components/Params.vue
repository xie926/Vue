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
  }
}
</script>

<style>

</style>