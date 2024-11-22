const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => console.log('Conectado al servidor');
