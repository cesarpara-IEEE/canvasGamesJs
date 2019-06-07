

class draw {
  constructor(user, rect, id){
    this.user = user
    this.rect = rect
    this.canvas =  document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.arr = []
  }
  
  pintar(){
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

export {draw}