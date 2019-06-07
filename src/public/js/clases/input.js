
class scaner{
  constructor(rect){
    this.rect = rect
  }

  scaneo(socket){
    var rect = this.rect
    document.onkeydown = function(e){
      var key = e.code;
      switch(key){
        case "ArrowRight":
          rect.x += rect.vx;
          break
        case "ArrowLeft":
          rect.x -= rect.vx;
          break  
        case "ArrowUp":
          rect.y -= rect.vy;
          break
        case "ArrowDown":
          rect.y += rect.vy;
          break
      }
      socket.emit('posRenov', [rect.x, rect.y]);
    }
  }
}

export{scaner}
