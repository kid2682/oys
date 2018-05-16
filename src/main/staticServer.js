const staticServer = require('node-static')
const path = require('path')
let file = new staticServer.Server(path.join(__dirname, '..', 'static'))
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response)
  }).resume()
}).listen(8088)
