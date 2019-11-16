import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add(state, n){
    state.count+=n
  },
  reduce(state){
    state.count--
  }
}
const getters = {
  count: function(state){
    return state.count+=100
  }
}
const actions = {
  addAction(context){
    context.commit('add', 10)
    setTimeout(()=>{
      context.commit('reduce')
    },3000)
    console.log('我是用来测试异步操作的')
  },
  reduceAction({commit}){
    commit('reduce')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})