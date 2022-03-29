const express = require('express');
const path = require('path');

require('dotenv').config();

// App expres
const app = express();

// NODE SERVER
const server = require('http').createServer(app);

module.exports.io = require('socket.io')(server);

// MENSAJES DE SOCKETS
require('./sockets/socket');


// path public

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));



server.listen(process.env.PORT, (e)=>{

    if(e) throw new Error(e);

    console.log('Servidor Corriendo puerto', process.env.PORT);

})