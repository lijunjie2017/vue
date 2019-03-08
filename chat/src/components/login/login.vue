<template>
    <div id="login">
      <mt-field label="输入昵称" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-button type="primary" @click="login()">登陆</mt-button>
    </div>
</template>

<script>
  var axios = require('axios')
  var qs = require('qs')
    export default{
       data(){
         return {
           username : '',
           password : '',
           status   : '',
         }
       },
      methods:{
        login(){
          var _this = this;
          var obj = {
            username : _this.username,
          }
          var url = 'http://localhost:3030/login'
          axios.post(url,qs.stringify(obj))
            .then(function (res) {
                console.log(res);
                _this.$router.push({path:'/index',query:{username : res.data.username}})

            })
            .catch(function (err) {
              console.log(err)
            })
        },
      },
      mounted(){

      }
    }

</script>

<style>

</style>
