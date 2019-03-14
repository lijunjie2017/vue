<template>
  <div id="richeng">
    <table>
      <thead>
        <tr>          
          <th>周日</th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 6"><td>1</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'richeng',
  data(){
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
