import '../css/main.css';

import {user, rect} from './clases/clasess.js';
import {draw} from './clases/draw.js';
import {scaner} from './clases/input.js';
import {tuberia} from './clases/socket.js';


var usuario =  new user();
var rectangulo = new rect(0, 0);
var canv =  new draw(usuario, rectangulo, 'canvas');
var scan = new scaner(rectangulo);

var tuv = new tuberia(usuario, rectangulo, canv, scan)


function main(){
  tuv.escuchar();
  setInterval(() => {canv.pintar()}, 80);
}

main();

