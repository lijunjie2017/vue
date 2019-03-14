<template>
    <div id="footer">
      <div class="hidden">

      </div>
      <div class="show">
        <div class="shop-cart">
          <img src="../../../resource/photo/shopcart.png" alt="">
        </div>
        <div class="shoufei">
          <span class="money">￥0</span>
          <span class="line-color"></span>
          <span class="psf">另需配送费￥4元</span>
        </div>
        <div class="total">
          <div class="all">
            <span>￥20元起送</span>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
    export default{
       props:[]
    }

</script>

<style scoped>
#footer{
  height: 58px;
  background: url("../../../resource/photo/footer_bg.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.9;
}
.hidden{
  width: 100%;
  height: 8px;
  background-color: transparent;
}
.show{
  background-color: #14172d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
}
.shop-cart{
  width: 62px;
  margin-left:18px;
}
.shop-cart img{
  width: 44px;
  height: 44px;
}
.shoufei{
  line-height: 50px;
  width: 50%;
}
.shoufei span,.total span{
  color: rgb(255,255,255,0.4);
  font-weight: 700;
  line-height: 24px;
  font-size: 12px;
  display: inline-block;
}
  .money{
    margin-right: 12px;
  }
.shoufei .line-color{
    width: 1px;
    border-right:1px solid rgb(255,255,255,0.1);
    height: 24px;
    position: relative;
    top: 6.5px;
    margin-right: 12px;
  }
.total{
    height: 100%;
    width: 105px;
    background-color: #2b333b;
    text-align: center;
    align-self: flex-end;
  }
  .total .all{
    display: inline-block;
    line-height: 50px;
  }
</style>
