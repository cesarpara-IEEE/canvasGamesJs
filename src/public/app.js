
function SocketsS(){
  const socket = io();
  
  var canvas =  document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var id;
  var arr;

  class rect {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.color = 'blue';
    }
    vx = 5
    vy = 5
    draw(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 50, 50);
    }
  }

  var rectangulo = new rect(0, 0);
  
  function draw(arr){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rectangulo.draw();
    if (arr !== undefined){
      for(idx in arr){
        if (idx !== id){
          pos = arr[idx];
          ctx.fillStyle = 'blue';
          ctx.fillRect(pos[0], pos[1], 50, 50);
        }
      }
    }
  }

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
    arr = data;
  })
  
  setInterval( () => {
    draw(arr);
  }, 80);

  socket.on('envioSoc', (data,cb) => {
    id = data;
    cb([rectangulo.x, rectangulo.y]);
  });
}

SocketsS()

