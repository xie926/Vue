<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}-{{count}}</h3>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">增加</button>
      <button @click="reduceAction">减少</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters,mapActions } from 'vuex'
export default {
  data(){
    return{
      msg: 'Hello Vuex'
    }
  },
  // 第一种方法
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // },
  // 第二方法
  // computed:mapState({
  //   count: state => state.count
  // }),
  // 第三种方法(常用)
  // computed: mapState(['count']),

  computed: {
    ...mapState(['count']),
    // count(){
    //   return this.$store.getters.count
    // }
    // ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>

<style>

</style>