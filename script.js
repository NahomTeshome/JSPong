mouseX = null;
mouseY = null;

var canvas;
var ctx;
var canvaswidth;

var playerX = 20;
var playerY;
var computerX = 270;
var computerY = 40;
function loaded(params) {
     canvas = document.getElementById("canvas");
     ctx = canvas.getContext("2d");
     canvaswidth = canvas.offsetWidth;
     ctx.fillStyle = "#a7b2c2";
     ctx.fillRect(20,20,10,50);
 
      
}
onmousemove = function(e){
    console.log("Mouse Location" , e.clientX, e.clientY);
    mouseX = e.clientX;
    mouseY = e.clientY;
   

}

setInterval(onTimerTick, 33);
function onTimerTick() {

    ctx.clearRect(0,0,600,400);
    ctx.fillStyle = "#a7b2c2";
    playerY = mouseY - 200;
    ctx.fillRect(playerX,playerY,10,50);
    ctx.fillRect(computerX,computerY,10,50);

    if (playerY > computerY){
        computerY += 1;
    }
    if (playerY < computerY) {
        computerY -= 1;
    }
}
        


console.log("js is connected");