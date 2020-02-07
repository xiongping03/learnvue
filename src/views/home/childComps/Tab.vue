<template>
  <div class="my-tab">
    <!-- <van-sticky :offset-top="44"> -->
      <van-tabs v-model="active" @click="homeTabClickHandel">
        <van-tab v-for="title in titles" :title="title" :key ="title"></van-tab>
      </van-tabs>
  <!-- </van-sticky> -->
  </div>
</template>

<script>
import { Tab, Tabs, Sticky  } from 'vant';
export default {
  name: 'Tab',
  methods:{
    homeTabClickHandel(name, title){
        var getCategory = this.$options.filters['getCategory'];
        this.$emit('homeTabClick',getCategory(name))
    }
  },
  filters:{
    getCategory(index){
      let char='cell'
      if(index===0){
        char='pop'
      }else if(index===1){
        char='new'
      }
      return char
    }
  },
  data(){
    return {
      active:0,
      titles:['流行','新款','精选']
    }
  },
  components:{
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Sticky.name]:Sticky
  }
}
</script>

<style scoped>
  .my-tab{
   position: sticky;
   top: 44px;
  }
</style>
