<template>
  <div class="home">
    <!-- 标题-->
    <van-nav-bar title="首页"/>
		<!-- 用了van-cell 导致我的选项卡不吸附 -->
    <scroll class="srcoll" ref = 'scroll' :probeType='3' :click='true'
      @scroll='scroll' @pullingUp='loadMore'>
      <!-- 轮播图-->
      <swiper :banners='banners' />
      <!-- 每日推荐 -->
      <recommend :recommends="recommends"/>
      <!-- 精选 -->
      <feature/>
      <!-- 选项卡 -->
      <tab @homeTabClick='homeTabClickHandel'/>

      <goods-list :goodsdata="clothes"/>
    </scroll>
    <back-top @click.native = 'backtop' v-show="showBackTop"/>
  </div>
</template>

<script>
import { NavBar } from 'vant';

import Swiper from './childComps/Swiper'
import Recommend from './childComps/Recommend'
import Feature from './childComps/Feature'
import Tab from './childComps/Tab'

import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/Scroll.vue'
import BackTop from 'components/content/BackTop.vue'

import { getHomeMutiData, getHomeGoods } from '../../network/home.js'
import { debounce }  from 'common/utils.js'
export default {
  name: 'Home',
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{
          pageIndex:0,
          list:[]
        },
        "new":{
          pageIndex:0,
          list:[]
        },
        "sell":{
          pageIndex:0,
          list:[]
        }
      },
      category:'pop',
      showBackTop:false
    }
  },
  methods: {
      loadMore(){
        this.getHomeGoodsHandel(this.category)
      },
      getHomeMutiDataHandel(){
        getHomeMutiData().then(res =>{
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoodsHandel(type){
        let {pageIndex} = this.goods[type]
        getHomeGoods(pageIndex+1,type).then(res=>{
          this.goods[type].pageIndex = pageIndex+1
          this.goods[type].list.push(...res.data.list)
          this.$refs.scroll.finishPullUp()
        })
      },
      homeTabClickHandel(index){
        this.category = index
      },
      backtop(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      scroll(pos){
        this.showBackTop = -pos.y>1000
      }


  },
  computed:{
    clothes(){
      return  this.goods[this.category].list
    }
  },
  components:{
    [NavBar.name]: NavBar,
    Swiper,
    Recommend,
    Feature,
    Tab,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //请求首页数据
    this.getHomeMutiDataHandel()
    //获取流行、新款、精选数据
    this.getHomeGoodsHandel('pop')
    this.getHomeGoodsHandel('new')
    this.getHomeGoodsHandel('sell')

  },
  mounted() {

    let refresh = debounce(this.$refs.scroll.refresh,300)
    this.$bus.$on('imageLoad',()=>{
         refresh()
    })
  }
}
</script>

<style scoped>
.van-nav-bar{
  background-color:#EE0A24;
  height: 44px;
}
.home{
  height: 100vh;
  position: relative;
}
.srcoll{
  height:calc(100% - 93px);
  overflow: hidden;
}
</style>
