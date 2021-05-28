const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // si un usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar cliente con el evento 'enviarMensaje'
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // Este es el callback del emit enviarMensaje del frontend
        // if ( mensaje.usuario ){
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!!!'
        //     });
        // }
    });
});