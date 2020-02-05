<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'Tabbar',
  data(){
    return {
      active:0
    }
  },
  components:{
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style scoped>

</style>
