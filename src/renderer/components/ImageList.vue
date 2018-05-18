<template>
  <div id="wrapper">
    <viewer :images="images">
      <img class="img" v-for="src in images" :src="src" :key="src">
    </viewer>
  </div>
</template>
<script>
  import ip from 'ip'
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  import chokidar from 'chokidar'
  const path = require('path')
  let imgPath = path.join(__dirname, '..', '..', 'static', 'img')
  let http = `http://${ip.address()}:8088/`
  Vue.use(Viewer)
  export default {
    data () {
      let images = []
      return {images}
    },
    mounted () {
      let watcher = chokidar.watch(imgPath)
      console.log('mounted', watcher)
      watcher.on('add', path => {
        console.log(`${http}${path.replace('src/static/', '')}`)
        Vue.nextTick(() => {
          this.images.unshift(`${http}${path.replace('src/static/', '')}`)
        })
      })
    }
  }
</script>
<style>
  .img{
    width:100px;
    height:100px;
  }
</style>
