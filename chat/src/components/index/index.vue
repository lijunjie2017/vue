<template>
    <div id="indexs">
      <mt-header fixed title="聊天室"></mt-header>
      <div id="chatbox">
        <ul>
          <li v-for="(item,key) in conList" :class="{'chat-left' : item.username != myName,'chat-right':item.username == myName}">
            <div class="img">
              <img src="../../assets/logo.png" alt="">
            </div>
            <div class="content">
              <p>{{item.msg}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!--底部输入框-->
      <footer>
        <input type="text" v-model="msg">
        <button @click="sendMsg()">发送</button>
      </footer>
    </div>
</template>


<script>
  var axios = require('axios')
  var qs = require('qs')
    export default{
      data(){
        return {
          msg    : '',
          classA :　'chat-left',
          conList: [],
          isMe   : false,
          notMe  : true,
          myName : ''
        }
      },
      sockets:{
        connect(){
          console.log('聊天室已经连接好了')
        },
        login(val){
          this.conList.push(val);
        }
      },
      methods:{
        sendMsg(){
          var _this = this;
          var obj= {
            username : _this.$route.query.username,
            msg      : _this.msg
          };
          this.$socket.emit('chat message',obj)

        },
      //控制聊天内容的方向
        isMyContent(){

        }
      },
      mounted(){
        this.myName = this.$route.query.username;
      }

    }

</script>

<style scoped>
#chatbox ul{
  overflow: hidden;
  width: 100%;
}
#chatbox ul li{
  max-width: 80%;
  margin: 10px 0;
  display: flex;
}
#chatbox ul .chat-left{
  flex-direction: row;
  justify-content: flex-start;
}
#chatbox ul .chat-right{
  flex-direction: row-reverse;

  max-width: 100%;
  margin-left: 20%;
}
  .img{
    width: 25px;
    height: 25px;
  }
  .content{
    padding-left: 5px;
    background: #fff;
  }
  .content p{
    font-size: 12px;
    color: #b1b1b1;
    line-height: 25px;
  }
.img img{
  width: 25px;
  height: 25px;
}
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
}
  footer input{
    height: 25px;
  }
</style>
