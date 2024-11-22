const ws = new WebSocket('ws://localhost:8080');
const clickSound = new Audio('click.mp3');
let playerName = '';

ws.onopen = () => {
    console.log('Conectado al servidor');
};

ws.onmessage = (event) => {
    const mensaje = event.data;
    agregarLog(mensaje);

    if (mensaje.includes('¡Ya!')) {
        document.getElementById('click-button').disabled = false;
    } else if (mensaje.includes('Juego terminado')) {
        document.getElementById('click-button').disabled = true;
        confetti(); // Lanza confeti al terminar
    }

    if (mensaje.startsWith('¡Punto sumado!')) {
        const score = mensaje.match(/Total: (\d+)/);
        if (score) {
            document.getElementById('score').innerText = `Puntaje: ${score[1]}`;
        }
    }
};

function enviarNombre() {
    const input = document.getElementById('player-name');
    playerName = input.value.trim();
    if (playerName) {
        ws.send(JSON.stringify({ type: 'name', name: playerName }));
        document.getElementById('name-input').style.display = 'none';
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
}

function enviarClick() {
    const button = document.getElementById('click-button');
    ws.send(JSON.stringify({ type: 'click' }));
    agregarLog('¡Hiciste clic!');
    clickSound.play();

    // Añadir efecto explosión al botón
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 400);

    // Animación de pulso al hacer clic
    button.classList.add('pulse');
    setTimeout(() => button.classList.remove('pulse'), 400);
}

function agregarLog(mensaje) {
    const log = document.getElementById('log');
    const nuevoMensaje = document.createElement('p');
    nuevoMensaje.textContent = mensaje;
    log.appendChild(nuevoMensaje);

    // Animación al agregar un mensaje al log
    nuevoMensaje.classList.add('fadeInLog');
    setTimeout(() => nuevoMensaje.classList.remove('fadeInLog'), 500);
}

