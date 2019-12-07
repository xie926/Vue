<template>
  <div id="app">
    <Nav v-if="isShowNav"></Nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Vue,Component,Watch} from 'vue-property-decorator'
// import Component from 'vue-class-component'
import Nav from '@/components/nav.vue'

@Component({
  components: {
    Nav,
  },
})

export default class App extends Vue {
  private isShowNav: boolean = false;

  // @Watch('$route')
  // routeChange(val, oldval)
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
