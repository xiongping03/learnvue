<template>
  <div>
      <van-tabs v-model="active" @click="homeTabClickHandel">
        <van-tab v-for="title in titles" :title="title" :key ="title">

        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs  } from 'vant';
export default {
  name: 'Tab',
  methods:{
    homeTabClickHandel(name, title){
        this.$emit('homeTabClick',name)
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
    [Tabs.name]:Tabs
  }
}
</script>

<style scoped>

</style>
