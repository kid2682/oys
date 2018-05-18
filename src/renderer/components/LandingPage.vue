<template>
  <div id="wrapper">
    <main>
      <div>
        <canvas id="test"></canvas>
      </div>
      <router-link to="imageList">openImageList</router-link>
    </main>
  </div>
</template>

<script>
  import ip from 'ip'
  const QRCode = require('qrcode')
  export default {
    name: 'landing-page',
    mounted () {
      QRCode.toCanvas(document.getElementById('test'), 'http://' + ip.address() + ':8088', function (error) {
        if (error) console.error(error)
        console.log('success!')
      })
    },
    methods: {
      open (link) {

      }
    }
  }
</script>

<style>

</style>
