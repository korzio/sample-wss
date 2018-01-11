// Minimal amount of secure websocket server
var fs = require('fs')

// read ssl certificate
var privateKey = fs.readFileSync('key.pem', 'utf8')
var certificate = fs.readFileSync('server.crt', 'utf8')

var credentials = { key: privateKey, cert: certificate }
var https = require('https')

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials)
httpsServer.listen(8443)

var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({
  server: httpsServer
})

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
    ws.send('reply from server : ' + message)
  })

  ws.send('something')
})