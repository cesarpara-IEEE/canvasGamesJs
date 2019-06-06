

module.exports = function (io) {

  let posiciones = {};
    
  io.on('connection', socket => {
    console.log('Un nuevo usuario connectado')

    socket.emit('envioSoc', socket.id, posicion => {
      posiciones[socket.id] = posicion
      io.sockets.emit('todos', posiciones);
      console.log(posiciones)
    });
    
    //socket.emit('todos', posiciones);

    socket.on('posRenov', (data) => {
      posiciones[socket.id] = data;
      io.sockets.emit('todos', posiciones)
    });

    
    socket.on('disconnect', data => {
      delete posiciones[socket.id];
      io.sockets.emit('todos', posiciones);
    });

  });
}