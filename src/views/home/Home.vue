<template>
  <div>
    <!-- 标题-->
    <van-nav-bar
      title="首页"
    />
    <!-- 轮播图-->
    <swiper :banners='banners'></swiper>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import Swiper from './childComps/Swiper'
import { getHomeMutiData } from '../../network/home.js'
export default {
  name: 'Home',
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  components:{
    [NavBar.name]: NavBar,
    Swiper
  },
  created() {
    //请求首页数据
    getHomeMutiData().then(res =>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })

  }
}
</script>

<style scoped>
.van-nav-bar{
  background-color:#EE0A24;
}
</style>
