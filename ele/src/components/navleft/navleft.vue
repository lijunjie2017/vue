<template>
    <div id="nav-l">
      <ul>
        <li class="normal" v-for="(item,key) in list" @click="nav(key)" :class="{'active':item.show}">
          <div class="li-item">
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default{
       data(){
         return{
           list : [
             {name :'热销榜',show : true},
             {name :'单人特色套餐',show : false},
             {name :'特色粥品',show : false},
             {name :'精选热菜',show : false},
             {name :'爽口凉菜',show : false},
             {name :'半成品',show : false},
             {name :'饭类',show : false},
             {name :'面类',show : false},
             {name :'饮料',show : false},
             {name :'饮料',show : false},
             {name :'饮料',show : false},
             {name :'饮料',show : false}
           ],
           isNav: false,
         }
       },
      methods:{
        nav(val){
          for(var i in this.list){
            this.list[i].show = false;
          }
          this.list[val].show = true;
        },
      },
    }

</script>

<style scoped>
  #nav-l{
    height: 486px;
    overflow: hidden;
    overflow-y: scroll;
  }
#nav-l ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#nav-l ul li{
  width: 80px;
  height: 54px;
}
.normal{
  background-color: #f3f5f7;
  color: #07111b;
}
.active{
  background-color: #fff;
  color: rgb(240,20,20);
}
  .li-item{
    width: 56px;
    height: 100%;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid rgb(7,17,27,0.1);

  }
.li-item span{
  text-align: center;
  font-size: 12px;
  line-height: 14px;
}
</style>
