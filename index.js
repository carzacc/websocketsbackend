var WebSocket = require('ws');

var port = process.env.PORT || 3000;

var server = new WebSocket.Server(
  {
    port: port,
  }
)

let msg = "Server: Welcome!";

server.on('connection', function connection(client) {
  client.send(msg);
  client.on('message', function incoming(message) {
    msg = message;
    for(var cl of server.clients) {
      cl.send(message);
    }
    console.log("Received the following message:\n" + message);
  });
});
