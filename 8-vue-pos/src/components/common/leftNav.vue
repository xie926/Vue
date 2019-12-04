<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-31goumaichongzhi"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-31huiyuan"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-paixing"></i>
        <div>统计</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.left-nav{
  color:#fff;
  font-size: 10px;
  height: 100%;
  background-color: #1D8CE0;
  float: left;
  width: 5%;
}
.iconfont{
  font-size: 24px;
}
.left-nav ul{
  padding: 0;
  margin: 0;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}
.left-nav li{
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>