// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
import VueSocketIo from 'vue-socket.io'



Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(new VueSocketIo({
  debug:false,
  connection: 'http://localhost:3030/'
}))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
