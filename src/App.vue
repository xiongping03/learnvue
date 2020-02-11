<template>
  <div id="app">
  <keep-alive>
    <router-view include = 'Home'/>
  </keep-alive>
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
