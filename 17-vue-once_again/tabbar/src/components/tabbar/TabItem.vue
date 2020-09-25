<template>
  <div class="tab-bar-item" @click="itemClick">
      <div>
        <div v-if="!isActive">
          <slot name="icon"></slot>
        </div>
        <div v-else>
          <slot name="icon-active"></slot>
        </div>
        <div :style="activeStyle">
          <slot name="text"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {color: this.activeColor} : null
    }
  },
  methods: {
    itemClick(){
      if(!(this.$route.path === this.path)){
        this.$router.push(this.path)
      }
      console.log(this.$route.path)
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item i{
  display: inline-block;
  font-size: 24px;
  margin-top: 2px;
}
.active{
  font-weight: bold;
}
</style>