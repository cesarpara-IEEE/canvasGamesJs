
class user {
  constructor(){
    this.id
  }
}


class rect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 'blue';
    this.vx = 5;
    this.vy = 5;
  }

  getFif(){
    return [this.color, this.x, this.y];
  }
}

class dibujar {
  constructor(user, rect, id){
    this.user = user
    this.rect = rect
    this.canvas =  document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.arr = []
  }
  
  draw(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    var lis = this.rect.getFif()
    this.ctx.fillStyle = lis[0];
    this.ctx.fillRect(lis[1], lis[2], 50, 50);
    if (this.arr !== undefined){
      for(var idx in this.arr){
        if (idx !== this.user.id){
          var pos = this.arr[idx];
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(pos[0], pos[1], 50, 50);
        }
      }
    }
  }
}


function SocketsS(){
  const socket = io();

  var usuario =  new user();
  var rectangulo = new rect(0, 0);
  var cav =  new dibujar(usuario, rectangulo, 'canvas');


  document.onkeydown = function(e){

    key = e.code;
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

