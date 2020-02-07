<template>
  <div class="goodslist">
    <div v-for="(item,index) in goodsdata" :key="index" class="goodslist-item">

      <div class="image"><img :src="item.show.img"/></div>

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
