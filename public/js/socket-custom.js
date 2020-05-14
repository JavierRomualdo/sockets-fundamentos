

// La conexion de socket en Frontend
var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// on = son par escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor')
});

// Enviar información (al servidor de uno a uno)
socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

// Escuchar información
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor:');
    console.log(mensaje);
});