<template>
  <div class="my-backtop">
    <img src="~assets/image/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .my-backtop{
    position: absolute;
    bottom: 50px;
    right: 10px;
    z-index: 1;
  }
  .my-backtop img{
    width: 49px;
    height: 49px;
  }
</style>
