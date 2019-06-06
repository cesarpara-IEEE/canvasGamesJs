const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const app =  express();
const server =  http.createServer(app);
const io = socketio.listen(server);


// Confuguraciones 
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


// Escuchando al servidor
server.listen(app.get('port'), () => {
  console.log('Server conectado en al puerto ', app.get('port'))
});


