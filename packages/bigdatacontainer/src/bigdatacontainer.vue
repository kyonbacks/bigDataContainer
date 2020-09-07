<template>
  <div class="wrapper" ref="body">
    <div
            class="scale-box"
            ref="box"
            :style="{
         transform: `scale(${scale}) translate(-50%, -50%)`,
         WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
         width:`${width}px`,
         height:`${height }px`
         }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "bigdatacontainer",
  props:{
    //x坐标的高度尺标
    width:{
      type:Number,
      default:1920
    },
    //y坐标的高度尺标
    height:{
      type:Number,
      default:1080
    },
    //是否开启随屏幕变化而变化
    resize:Boolean
  },
  data(){
    return {
      scale:1,
      winSize:0
    }
  },
  methods:{
    setScale(){
      let ww=this.$refs.body.offsetWidth/this.width;
      let wh=this.$refs.body.offsetHeight/this.height;
      this.scale =  ww<wh?ww: wh;
    }
  },
  mounted(){
    this.setScale();
    if(this.resize){
      window.addEventListener('resize', () => {
        this.setScale();
      })
    }
  }
}
</script>

<style scoped lang="less">
  div{
    box-sizing: border-box;
  }
  .wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .scale-box{
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.3s;
  }
</style>
