const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // INPUT_REQUIRED {Set the appropriate port for WebSocket server}

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // Broadcast to all clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => console.log('Client disconnected'));

  ws.send('Welcome to the Virtual Waffle House Food Fight!');
  
  ws.on('error', function error(err) {
    console.error('WebSocket error:', err);
  });
});

wss.on('error', function error(err) {
  console.error('WebSocket Server error:', err);
});

console.log('WebSocket Server running on port 8080.');