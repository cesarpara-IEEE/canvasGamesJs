
class tuberia {
  constructor(user, rect, canv, scan){
    this.socket = io();
    this.user = user;
    this.rect = rect;
    this.canv = canv;
    this.scan = scan;
  }

  escuchar(){
    
    this.scan.scaneo(this.socket);

    this.socket.on('todos', data => {
      this.canv.arr = data;
    })
    
    this.socket.on('envioSoc', (data,cb) => {
      this.user.id = data;
      cb([this.rect.x, this.rect.y]);
    });
  }
}

export{tuberia}