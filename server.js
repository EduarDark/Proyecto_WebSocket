const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.send('¡Bienvenido al servidor!');
});

server.listen(8080, () => console.log('Servidor en http://localhost:8080'));
