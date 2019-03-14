<template>
  <div id="app">
      <div class="nav">
      <!-- 导航栏开始 -->
        <div class="nav_header">
        <h3><img src="/static/images/xitong.png" alt=""></h3>
        </div>
        <div class="nav_container">
          <ul>
            <li><router-link to="/richeng"><a href="javascript:;"><img src="/static/images/message.png" alt=""></a></router-link></li>
            <li><router-link to="/"><a href="javascript:;"><img src="/static/images/richeng.png" alt=""></a></router-link></li>
            <li><router-link to="/rili"><a href="javascript:;"><img src="/static/images/rili.png" alt=""></a></router-link></li>
            <li><router-link to="/"><a href="javascript:;"><img src="/static/images/files.png" alt=""></a></router-link></li>
          </ul>
          </div>
          <div class="nav_footer">
          <ul>
            <li><a href="javascript:;"><img src="/static/images/tel.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="/static/images/jishi.png" alt=""></a></li>
          </ul>
          </div>
        <!-- 导航栏结束 -->
      </div>
    <!-- <my-date></my-date>
    <my-content></my-content> -->
    <router-view>

    </router-view>
  </div>
</template>

<script>
import myDate    from '@/components/date/mydate.vue'
import myContent from '@/components/content/content.vue'
export default {
  name: 'App',
  data(){
    return {
      logoMsg : 'I want you',
    }
  },
  components: {
    myDate,
    myContent,
  }
}
</script>

<style>
html,body{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  height: 100%;

}
h3 img{
  width: 20px;
  height: 20px;
}
ul,li{
  margin: 0;
  padding:0;
  list-style: none;
}
.nav{
  height: 100%;
  background-color: #4ababd;
  display: flex;
  flex-direction: column;
}
.nav_header{
  margin-bottom: 50px;
  flex: 0 0 auto;
}
.nav_container{
  flex: 1 0 auto;
}
.nav_footer{
  flex: 0 0 auto;
}
.nav ul li{
  padding: 15px 10px;
}
.nav ul li:hover{
  background-color: #399e9c;
}
.nav ul li img{
  width: 20px;
  height: 20px;

}
</style>







