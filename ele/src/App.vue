<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view/>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
  import vHeader from '@/components/header/header.vue';
  import vNav   from '@/components/nav/nav.vue';
  import vFooter   from '@/components/footer/footer.vue';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    'v-header': vHeader,
    'v-nav'   : vNav,
    'v-footer': vFooter
  },
}
</script>

<style>
  body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
#app {

}
  .footer{
    width: 100%;
    position: absolute;
    bottom: 0;
  }
</style>
