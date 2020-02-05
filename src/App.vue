<template>
  <div id="app">
  <router-view />
  <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/content/Tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style scoped>
 @import url("assets/css/base.css"); 
</style>
