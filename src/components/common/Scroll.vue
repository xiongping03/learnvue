<template>
  <div class="wrapper" ref = "wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:1
    },
    click:{
      type:Boolean,
      default:true
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  methods:{
    scrollTo(x,y,time = 300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },
  mounted(){
   this.$nextTick(() => {
           this.scroll = new BScroll(this.$refs.wrapper, {
              probeType: this.probeType,
              click: this.click,
              pullUpLoad:this.pullUpLoad
           })
           this.scroll.on('scroll', (pos) => {
                       this.$emit('scroll', pos)
                     })
           this.scroll.on('pullingUp',()=>{
              this.$emit('pullingUp')
           })

         })
  }
}

</script>

<style scoped>

</style>
