<template>
  <div id="wrapper">
    <viewer :images="images">
      <img class="img" v-for="src in images" :src="src" :key="src">
    </viewer>
  </div>
</template>
<script>
  import { remote } from 'electron'
  import ip from 'ip'
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  import chokidar from 'chokidar'
  const path = require('path')
  let http = `http://${ip.address()}:8087/`
  Vue.use(Viewer)
  export default {
    data () {
      let images = []
      return {images}
    },
    mounted () {
      let imgPath = path.join(remote.app.getPath('pictures'), 'oys')
      let watcher = chokidar.watch(imgPath)
      console.log('mounted', watcher)
      watcher.on('add', path => {
        // if()
        if (path.match(/.(jpg|jpeg|png|bmg)$/)) {
          Vue.nextTick(() => {
            this.images.unshift(`${http}${path.replace(imgPath, '')}`)
          })
        }
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
