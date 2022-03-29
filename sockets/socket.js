const { io } = require('../index');

io.on('connection', client => {
    
    console.log('cliente Conectado');

    client.on('mensaje', (payload) => {
        console.log(payload);

        io.emit('mensaje', { mensaje : "Bienvenido"});
    })

    client.on('disconnect', () => { console.log('cliente desconectado'); });

});