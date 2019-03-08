var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
  extended:true
}))
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
server.listen(3030,function () {
  console.log('服务器已经运行，端口号为3030')
})

app.get('/',function (req,res) {
  res.redirect("./index.html")
});
app.post('/login',function (req,res) {
  var data = req.body;
  console.log(data);
  res.jsonp(data);
})
app.use('/',express.static(path.join(__dirname,'/public')))

io.on('connection',function (client) {
  console.log('已经连接');
  client.on('chat message',function (msg) {
    console.log("msg:"+msg);
    io.emit('login',msg)
  })
  client.on('disconnect',function () {
    console.log('失去连接');
  })
})










