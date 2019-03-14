<template>
    <div id="header">
      <div class="header">
        <div class="bg">
          <img src="../../../resource/photo/avatar.png" alt="">
        </div>
        <div class="img">
          <img src="../../../resource/photo/avatar.png" alt="">
        </div>
        <div class="content">
          <ul>
            <li><i><img src="../../../resource/img/brand@2x.png" alt=""></i>粥品香坊（大运村）</li>
            <li class="item li-item1">蜂鸟专送/38分钟到达</li>
            <li class="item li-item2"><i><img src="../../../resource/img/decrease_1@2x.png" alt=""></i>在线支付满28减5，满50减10</li>
          </ul>
        </div>
      </div>
      <div class="talk">
        <p><i><img src="../../../resource/img/bulletin@2x.png" alt=""></i>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融合现代制作工艺</p>
        <span>></span>
      </div>
    </div>
</template>


<script>
    export default{
       props:[]
    }

</script>

<style scoped>
  #header{
    display: flex;
    flex-direction: column;
    background-color: rgba(7,17,25,0.5);
  }
  .header{
    width: 100%;
    display: flex;
    flex: 1;
  }
  .bg{
    position: absolute;
    width: 100%;
    height: 134px;
    filter: blur(10px);
    z-index: -1;

  }
  .bg img{
    width: 100%;
    height: 100%;
  }
  .img{
    width: 64px;
    height: 64px;
    margin: 24px 16px 18px 24px;

  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .content{
    margin: 26px 0 0 0;
  }
  .content ul li{
    color: rgb(255,255,255);
  }
  .content ul li:first-child i img{
    height: 16px;
    position: relative;
    top: 2px;
    margin-right: 6px;
  }
  .content ul li:first-child{
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;

  }
  .item{
    font-weight: 200;
    line-height: 12px;
  }
  .li-item1{
    font-size: 12px;
    margin: 8px 0 10px 0;
  }
  .li-item2{
    font-size: 10px;
  }
  .li-item2 i img{
    height: 16px;
    position: relative;
    top: 2px;
    margin-right: 4px;
  }

  .talk{
    width: 100%;
    height: 28px;
    background-color: rgba(7,17,27,0.2);
    display: flex;
    flex: 1;
  }
  .talk p{
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 28px;
    margin: 0 4px 0 12px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .talk span{
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 28px;
    margin-right: 12px;
  }
  .talk p i img{
    height: 14px;
    position: relative;
    top: 2px;
    margin-right: 4px;
  }
</style>
