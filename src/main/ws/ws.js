const WebSocket = require('ws')
const fs = require('fs')
const wss = new WebSocket.Server({ port: 8089 })
const path = require('path')
const uploadPath = path.join(__dirname, '..', '..', 'img', 'upload')

wss.on('connection', function connection (ws) {
  let data
  ws.on('message', function incoming (message) {
    if (data != null) {
      console.log('file', message.length)
      fs.writeFile(path.join(uploadPath, data.name), message, (err) => {
        data = null
        console.log('error', err)
      })
    } else {
      console.log(message)
      try {
        data = JSON.parse(message)
        if (typeof data !== 'object') { data = null }
      } catch (e) {
        console.error(e)
      }
    }
  })
})
