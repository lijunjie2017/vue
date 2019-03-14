<template>
    <div id="nav">
      <ul>
        <li><router-link to="/shop"  class="active">商品</router-link></li>
        <li>评价</li>
        <li>商家</li>
      </ul>
    </div>
</template>


<script>
    export default{
       props:[]
    }

</script>

<style scoped>
  #nav{
    height: 40px;
    width: 100%;
    display: flex;
  }
  #nav ul{
    width: 100%;
    margin: auto;
  }
  #nav ul li{
    float: left;
    width: 33.33%;
    text-align: center;
    font-size: 14px;
    color: rgb(77,85,93);
    line-height: 14px;
  }
.active{
    color: rgb(240,20,20) !important;
  }
</style>
