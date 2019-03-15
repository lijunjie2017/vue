<template>
    <div id="shop">
      <v-navleft class="navleft"></v-navleft>
      <router-view class="views"></router-view>
    </div>
</template>

<script>
  import vNavLeft   from '@/components/navleft/navleft.vue';
    export default{
       data(){
         return{

         }
       },
      components:{
        'v-navleft' : vNavLeft
      }
    }

</script>

<style scoped>
#shop{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
#navleft{
  min-width: 80px;
}
  .views{
    width: 100%;
  }
</style>
