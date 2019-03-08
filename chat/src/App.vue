<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/login/login.vue'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    "v-login": Login
  }
}
</script>

<style>
#app {
  padding-top: 40px;
}
html,body{
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
ul,li,p{
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
