<template>
  <div id="wrapper">
    <viewer :images="images">
      <img v-for="src in images" :src="src" :key="src">
    </viewer>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  export default {
    data () {
      let images = ['1.jpg', '2.jpg']
      return {images}
    }
  }
</script>
