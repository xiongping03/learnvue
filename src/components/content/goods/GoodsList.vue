<template>
  <div class="goodslist">
    <div v-for="(item,index) in goodsdata" :key="index" class="goodslist-item">

      <img :src="item.show.img" @load = 'load'/>

      <div class="bottom">
        <div class="title">{{ item.title }}</div>
         <span>{{ item.price }}</span>
         <span class="collection">&#9733;</span>
        <span>{{ item.cfav }}</span>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsList',
  methods:{
    load(){
      //事件总线发射一个图片加载完成事件
      this.$bus.$emit('imageLoad')
    }
  },
  props:{
    goodsdata:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodslist{
    display: flex;
   justify-content:  space-around;
   flex-wrap: wrap;
   text-align: center;
  }
  .goodslist-item{
   width: 48%;
   display: flex;
   flex-direction:column;
   justify-content:flex-end;

  }
  .goodslist-item img{
    width: 100%;
    border-radius: 10px;
  }
  .bottom .title{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }
  .bottom .collection{
     color: #FF8198;
  }
</style>
