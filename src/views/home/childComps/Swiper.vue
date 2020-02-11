<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banners" :key='index'>
        <img :src="item.image" @load="imageLoad"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  name: 'Swiper',
  props:{
    banners:{
      type:Array,
      default:[]
    }
  },
  methods:{
    imageLoad(){
      this.$emit('imageLoad')
    }
  },
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  }
}
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    /* 设置为O 就不突出来了 很奇怪*/
     font-size: 0px;
  }
  img{
    width: 100%;
    height: auto;
  }
</style>
