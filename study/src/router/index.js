import Vue from 'vue'
import Router from 'vue-router'
// import myHeader  from '@/components/header/header.vue'
import myRili from '@/components/rili/rili.vue'
import riCheng from '@/components/richeng/richeng.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/rili',
    	name:'myrili',
    	component:myRili
    },
    {
      path:'/richeng',
      name:'richeng',
      component:riCheng
    }
  ]
})
