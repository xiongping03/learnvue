<template>
  <div class="my-recommend">
    <div calss='recommend-item' v-for="(item,index) in recommends" :key='item.sort'>
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props:{
    recommends:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
.my-recommend{
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0.25rem 0 0.25rem  0;
  border-bottom: 6px solid #EBEDF0;
}
.recommend-item{
  flex: 1;
}
img{
    height: 90px;
   /* width: 90px; */
}

</style>
