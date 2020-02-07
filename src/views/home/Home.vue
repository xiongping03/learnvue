<template>
  <div>
    <!-- 标题-->
    <van-nav-bar title="首页" fixed/>
    <!-- 轮播图-->
    <swiper :banners='banners' />
    <!-- 每日推荐 -->
    <recommend :recommends="recommends"/>
    <!-- 精选 -->
    <feature/>
    <!-- 选项卡 -->
    <tab @homeTabClick='homeTabClickHandel'/>

    <goods-list :goodsdata="clothes" class="srcoll"></goods-list>
    <!-- 滑动入坑指南，不要设置div高度，除非使用其他插件，用了van-cell 导致我的选项卡不吸附 -->
    <!-- <div class="gundong">
        <van-list
                 v-model="loading"
                 :finished="finished"
                 finished-text="没有更多了"
                 @load="onLoad"
               >
                 <div v-for="item in list" :key="item" >{{ item }}</div>
               </van-list>
     </div> -->


  </div>
</template>

<script>
import { NavBar ,List ,Cell} from 'vant';

import Swiper from './childComps/Swiper'
import Recommend from './childComps/Recommend'
import Feature from './childComps/Feature'
import Tab from './childComps/Tab'

import GoodsList from 'components/content/goods/GoodsList.vue'

import { getHomeMutiData, getHomeGoods } from '../../network/home.js'
export default {
  name: 'Home',
  data(){
    return {
      list: [],
      loading: false,
      finished: false,
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
      category:'pop'
    }
  },
  methods: {
      onLoad(){
         setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                  this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                  this.finished = true;
                }
              }, 1000);
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
          this.goods[type].list = this.goods[type].list.concat(res.data.list)
        })
      },
      homeTabClickHandel(index){
        this.category = index
      }

  },
  computed:{
    clothes(){
      return  this.goods[this.category].list
    }
  },
  components:{
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    Swiper,
    Recommend,
    Feature,
    Tab,
    GoodsList
  },
  created() {
    //请求首页数据
    this.getHomeMutiDataHandel()
    //获取流行、新款、精选数据
    this.getHomeGoodsHandel('pop')
    this.getHomeGoodsHandel('new')
    this.getHomeGoodsHandel('sell')

  }
}
</script>

<style scoped>
.van-nav-bar{
  background-color:#EE0A24;
  height: 44px;
}
.srcoll{
  margin-bottom: 49px;
}
</style>
