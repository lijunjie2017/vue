<template>
<div class="all">
  <!-- 日历组件 -->
  <div class="date">
    <div class="title">
      <h3>
        <i @click="last()"><</i>
       <span> {{msg}}年</span>
       <span> {{mon}}月</span>
       <i @click="next()">></i>
     </h3>
    </div>  
    <table v-html="tablehtml">
      

    </table>
    <div class="xingceng">  
      <div class="my">
        <h3><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>我的日程</h3>
      </div>
      <div class="team">
        <h3><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>团队日程</h3>
        <ul>
          <li class="huiyi"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>会议安排</li>
          <li class="ceshi"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>测试</li>
        </ul>
      </div>
      <div class="cengyuan">
        <h3><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>成员日程</h3>
      </div>
    </div>
  </div>
  <!-- 日历组件end -->
  <!-- 留言板模块 -->
  <div class="liuyan">
    <div class="t-title">
      <div class="t-date">
        <h3>
          <i @click="last()"><</i>
          <span> {{msg}}年</span>
          <span> {{mon}}月</span>
          <i @click="next()">></i>
        </h3>
      </div>
      <div class="t-choose">
        <ul>
          <li class="t-active t-new">新建</li>
          <li class="t-active">月</li>
          <li class="t-normal">周</li>
          <li class="t-normal">日</li>
        </ul>
      </div>
    </div>
    <table v-html="liuyanhtml">
      

    </table>
  </div>
  <!-- 留言板模块end -->
</div>
</template>

<script>
export default {
  name: 'headerDiv1',
  data(){
    return {
      msg:2008,
      mon:1,
      tablehtml:'',
      liuyanhtml:'',
    }
  },
  mounted(){
    this.tiaozhuan(2019,2),
    this.liuyan(2019,2)
    this.getRiqi()
  },
  methods:{
    tiaozhuan(yeargoal,monthgoal){
        var _this = this;
        //月末
        var time  = new Date(yeargoal,monthgoal,0);
        //上一个月的月末
        var lasttime = new Date(yeargoal,monthgoal-1,0);
        var lastday  = lasttime.getDate();
        
        console.log(lastday);
        
        //获得这个月由多少天
        console.log(time.getDate());
        var date = time.getDate();
        var time2 = new Date(yeargoal,monthgoal-1,1);
        //获得这个月的一号是星期几
        console.log(time2.getDay());
        var day = time2.getDay();
        
        //月
        console.log(time.getMonth()+1);
        var mon = time.getMonth()+1;
        //年
        console.log(time.getFullYear());
        var year = time.getFullYear();

        //行标签头
        var hangT = "<tr style='height:50px;border: solid 1px black'>";
        //空的td块
        var lieK = "<td style='width:50px;border: solid 1px black'></td>";
      
        var timestr = hangT;
        //日历表头
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"日"+"</td>";
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"一"+"</td>";
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"二"+"</td>";
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"三"+"</td>";
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"四"+"</td>";
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"五"+"</td>";
        timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+"六"+"</td>";
        timestr = timestr+"</tr><tr style='heigth:50px;border: solid 1px black'>";

        var longday = lastday - day+1;
        
        for(var i = longday;i<=lastday;i++){
          timestr = timestr+"<td style='width:50px;border: solid 1px black;color:#9e9e9e;'>"+i+"</td>";
        }
        for(var j = 1;j<=date;j++){
          timestr = timestr+"<td style='width:50px;border: solid 1px black'>"+j+"</td>";
          if(day==6){
            timestr = timestr+"</tr><tr style='heigth:50px;border: solid 1px black'>";
            day = -1;
          }
          day++;
        }
        var lendday = 7-day;
        if(day>0){
          for(var i = 1;i<=lendday;i++){
            timestr = timestr+"<td style='width:50px;border: solid 1px black;color:blue;'>"+i+"</td>";
          }
        }
        timestr = timestr+"</tr>";
        _this.tablehtml = timestr;
    },
    liuyan(yeargoal,monthgoal){
        var _this = this;
        //月末
        var time  = new Date(yeargoal,monthgoal,0);
        //上一个月的月末
        var lasttime = new Date(yeargoal,monthgoal-1,0);
        var lastday  = lasttime.getDate();
        
        console.log(lastday);
        
        //获得这个月由多少天
        console.log(time.getDate());
        var date = time.getDate();
        var time2 = new Date(yeargoal,monthgoal-1,1);
        //获得这个月的一号是星期几
        console.log(time2.getDay());
        var day = time2.getDay();
        
        //月
        console.log(time.getMonth()+1);
        var mon = time.getMonth()+1;
        //年
        console.log(time.getFullYear());
        var year = time.getFullYear();

        //行标签头
        var hangT = "<tr style='height:50px;border: solid 1px black'>";
        //空的td块
        var lieK = "<td style='width:200px;border: solid 1px black'></td>";
      
        var timestr = hangT;
        //日历表头
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"日"+"</td>";
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"一"+"</td>";
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"二"+"</td>";
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"三"+"</td>";
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"四"+"</td>";
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"五"+"</td>";
        timestr = timestr+"<td style='width:200px;border: solid 1px black'>"+"六"+"</td>";
        timestr = timestr+"</tr><tr style='heigth:50px;border: solid 1px black'>";

        var longday = lastday - day+1;
        
        for(var i = longday;i<=lastday;i++){
          timestr = timestr+"<td style='width:50px;border: solid 1px black;color:#9e9e9e;'>"+i+"</td>";
        }
        for(var j = 1;j<=date;j++){
          timestr = timestr+"<td style='width:50px;height:150px;border: solid 1px black'>"+j+"</td>";
          if(day==6){
            timestr = timestr+"</tr><tr style='heigth:50px;border: solid 1px black'>";
            day = -1;
          }
          day++;
        }
        var lendday = 7-day;
        if(day>0){
          for(var i = 1;i<=lendday;i++){
            timestr = timestr+"<td style='width:50px;border: solid 1px black;color:blue;'>"+i+"</td>";
          }
        }
        timestr = timestr+"</tr>";
        _this.liuyanhtml = timestr;
    },
    getRiqi(){
      //获取当前的年月
      var myDate = new Date();
      var thisYear = myDate.getFullYear();
      var thisMonth = myDate.getMonth()+1; 
      this.msg = thisYear;
      this.mon = thisMonth;
    },
    //点击下一个月份
    next(){
      this.mon++;
      if(this.mon > 12){
        this.msg++;
        this.mon = 1;
      }
      this.tiaozhuan(this.msg,this.mon);
      this.liuyan(this.msg,this.mon);
    },
    //点击上一个月份
    last(){
      this.mon--;
      if(this.mon < 1){
        this.msg--;
        this.mon = 12;
      }
      this.tiaozhuan(this.msg,this.mon);
      this.liuyan(this.msg,this.mon);
    },
    //双击事件
    create(){
      console.log(123)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {padding: 0;font-size: 0.75rem;margin:0.75rem 0;}
h1, h2 {
  font-weight: normal;
}0
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0;
}
a {
  color: #42b983;
}
i {
  color: #9e9e9e;
}
.date{background: #efe7ef;}
.all{
  display: flex;
  flex-direction: row;
}
/*行程模块*/
.xingceng{text-align: left;margin: 1.5rem 0;}
  .xingceng h3{padding: 5px 0;font-weight: normal;margin: 0;}
  .my{background: #9e9e9e;padding-left: 0.75rem;font-weight: normal;}
  .team{padding-left: 0.75rem;}
  .cengyuan{padding-left: 0.75rem;}
.liuyan{overflow-y: scroll;margin: 0 1.75rem;}
  .t-title{display: flex;flex-direction: row;}
    .t-date{width: 50%;text-align: left;}
    .t-choose{margin-left: auto;}
    .t-choose ul li{float: left;width: 8rem;height: 3.125rem;line-height: 3.125rem;}
    .t-new{margin-right: 2rem;}
    .t-active{color: #fff;background: #6bcfd6;}
    .t-normal{background: #fff3ff;color: #313031;}
.glyphicon-ok{color: #fff;}
.huiyi span{background: #de7973;font-size: 0.45rem;}
.ceshi span{background: #63ba5a;font-size: 0.45rem;}
</style>
