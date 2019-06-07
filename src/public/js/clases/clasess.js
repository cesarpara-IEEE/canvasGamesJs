
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

export {user, rect}