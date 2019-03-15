import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '@/components/shop/shop.vue'
import Type from '@/components/type/type.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shop',
      component: Shop
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: Shop,
      children:[
        {
          path:'',
          component:Type
        },
        {
          path:'type',
          name: 'type',
          component: Type
        }
      ]
    },
  ]
})
