!function(t){var e={};function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);var s=new class{constructor(){this.id}},i=new class{constructor(t,e){this.x=t,this.y=e,this.color="blue",this.vx=5,this.vy=5}getFif(){return[this.color,this.x,this.y]}}(0,0),n=new class{constructor(t,e,r){this.user=t,this.rect=e,this.canvas=document.getElementById(r),this.ctx=canvas.getContext("2d"),this.arr=[]}pintar(){this.ctx.clearRect(0,0,canvas.width,canvas.height);var t=this.rect.getFif();if(this.ctx.fillStyle=t[0],this.ctx.fillRect(t[1],t[2],50,50),void 0!==this.arr)for(var e in this.arr)if(e!==this.user.id){var r=this.arr[e];this.ctx.fillStyle="blue",this.ctx.fillRect(r[0],r[1],50,50)}}}(s,i,"canvas"),c=new class{constructor(t){this.rect=t}scaneo(t){var e=this.rect;document.onkeydown=function(r){switch(r.code){case"ArrowRight":e.x+=e.vx;break;case"ArrowLeft":e.x-=e.vx;break;case"ArrowUp":e.y-=e.vy;break;case"ArrowDown":e.y+=e.vy}t.emit("posRenov",[e.x,e.y])}}}(i);new class{constructor(t,e,r,s){this.socket=io(),this.user=t,this.rect=e,this.canv=r,this.scan=s}escuchar(){this.scan.scaneo(this.socket),this.socket.on("todos",t=>{this.canv.arr=t}),this.socket.on("envioSoc",(t,e)=>{this.user.id=t,e([this.rect.x,this.rect.y])})}}(s,i,n,c).escuchar(),setInterval(()=>{n.pintar()},80)}]);