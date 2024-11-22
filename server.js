const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let players = [];
let maxClicks = 50; // Límite de clics por jugador

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);

        // Asigna el nombre del jugador
        if (message.type === 'name') {
            ws.name = message.name || `Jugador ${players.length + 1}`;
            players.push(ws);

            ws.send(`Bienvenido, ${ws.name}. Espera la señal para hacer clic.`);
            if (players.length === 2) {
                wss.clients.forEach((client) => client.send('¡Ya! Comiencen a hacer clic.'));
            }
        }

        // Procesa los clics
        if (message.type === 'click' && players.includes(ws)) {
            ws.score = (ws.score || 0) + 1;

            ws.send(`¡Punto sumado! Total: ${ws.score}`);
            if (ws.score >= maxClicks) {
                wss.clients.forEach((client) => {
                    if (client === ws) {
                        client.send(`¡Felicidades ${ws.name}, eres muy rápido!`);
                    } else {
                        client.send(`Será para la siguiente, ${client.name}. Sigue practicando.`);
                    }
                });

                // Reinicia el juego
                players.forEach((player) => {
                    player.score = 0;
                    player.send('Juego terminado, espera para jugar de nuevo.');
                });
                players = [];
            }
        }
    });

    ws.on('close', () => {
        players = players.filter((player) => player !== ws);
        wss.clients.forEach((client) => client.send('Un jugador se ha desconectado.'));
    });
});

server.listen(8080, () => {
    console.log('Servidor ejecutándose en http://localhost:8080');
});
