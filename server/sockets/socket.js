
const {io} = require('../server');

// coneccion de IO al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Esuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); // emit 
        // broadcast (enviamos a todo slos usuaricos conectados)

        // el callback() se puede usar luego que el mensaje se guardo en la bd u otro caso

        // if (mensaje.usuario) { //mensaje = data
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL !!'
        //     });
        // }

        // callback();
        // setTimeout(() => {
        //     callback();
        // }, 5000);
    });
});