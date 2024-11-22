# Juego de Clics Multijugador

## Descripción

Este es un juego de clics multijugador en tiempo real, donde los jugadores tienen que hacer clic en un botón para sumar puntos. El primer jugador en alcanzar un número máximo de clics gana la ronda. El juego utiliza **WebSockets** para la comunicación en tiempo real entre el servidor y los clientes.

---

## Tecnologías Utilizadas*

- **HTML**: Para la estructura de la página web.
- **CSS**: Para el estilo y diseño visual.
- **JavaScript**: Para la lógica del lado del cliente.
- **Node.js**: Como servidor backend.
- **WebSockets**: Para la comunicación en tiempo real entre el servidor y los jugadores.
- **Confetti.js**: Para efectos visuales de confeti cuando un jugador gana.
- **Audio**: Para efectos de sonido (fondo y clics).

---

## Estructura del Proyecto

- **`index.html`**: Página principal que contiene la estructura HTML y referencias a los archivos JavaScript y CSS.
- **`style.css`**: Estilos CSS para la interfaz de usuario, incluyendo animaciones y diseño.
- **`client.js`**: Lógica del cliente que gestiona las interacciones con el servidor, como enviar el nombre del jugador, hacer clic y actualizar el puntaje.
- **`server.js`**: Lógica del servidor que maneja las conexiones WebSocket, las reglas del juego y la comunicación entre los jugadores.

---

## Instalación

### Requisitos

- **Node.js** instalado en tu sistema.

### Pasos para configurar y ejecutar el proyecto:

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/EduarDark/Proyecto_WebSocket.git
Instalar dependencias:

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

bash
Copiar código
cd proyecto_webSockets
npm install
Ejecutar el servidor:

Después de instalar las dependencias, puedes iniciar el servidor ejecutando:

node server.js
El servidor se ejecutará en http://localhost:8080.

Abrir el juego:

Abre el archivo index.html en un navegador web. Los jugadores podrán unirse al juego y comenzar a hacer clic.

Funcionamiento del Juego
Pantalla de inicio:

El jugador ingresa su nombre en el campo de texto y presiona el botón "Unirme al juego".
Inicio del juego:

El servidor envía un mensaje para comenzar el juego una vez que ambos jugadores se han unido.
El botón "¡Haz clic!" se habilita para ambos jugadores.
Hacer clic:

Los jugadores deben hacer clic en el botón para ganar puntos.
Cada clic aumenta el puntaje del jugador.
Cuando un jugador alcanza el número máximo de clics (50), el juego se detiene.
Fin del juego:

El jugador que alcanza el máximo de clics primero es felicitado con un mensaje.
Los puntajes se reinician y el juego vuelve a comenzar.
Personalización
Puedes modificar el siguiente código en el archivo server.js para cambiar los parámetros del juego:

maxClicks: Número máximo de clics necesarios para ganar.
javascript
Copiar código
let maxClicks = 50; // Límite de clics por jugador

