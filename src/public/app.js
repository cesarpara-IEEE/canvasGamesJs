import {user, rect, dibujar} from './clasess.js';
import './main.css';


function SocketsS(){
  const socket = io();

  var usuario =  new user();
  var rectangulo = new rect(0, 0);
  var cav =  new dibujar(usuario, rectangulo, 'canvas');

  document.onkeydown = function(e){

    var key = e.code;
    switch(key){
      case "ArrowRight":
        rectangulo.x += rectangulo.vx;
        break
      case "ArrowLeft":
        rectangulo.x -= rectangulo.vx;
        break  
      case "ArrowUp":
        rectangulo.y -= rectangulo.vy;
        break
      case "ArrowDown":
        rectangulo.y += rectangulo.vy;
        break
    }
    socket.emit('posRenov', [rectangulo.x, rectangulo.y]);
  }

  socket.on('todos', data => {
    cav.arr = data;
  })
  
  socket.on('envioSoc', (data,cb) => {
    usuario.id = data;
    cb([rectangulo.x, rectangulo.y]);
  });

  setInterval( () => {
    cav.draw();
  }, 80);
}

SocketsS()

