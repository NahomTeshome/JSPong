mouseX = null;
mouseY = null;


let gameStarted = false;
var canvas;
var ctx;
var canvaswidth;

var playerX = 20;
var playerY;

var computerX =  660;
var computerY = 170;

var ballX = 700/2 - 10;
var ballY = 400/2 - 10;

var ballVelocityX;

let hitSound = new Audio("wallhit.wav");

function loaded(params) {
     canvas = document.getElementById("canvas");
     ctx = canvas.getContext("2d");
     canvaswidth = canvas.offsetWidth;
     ctx.fillStyle = "#a7b2c2";
    
     ballVelocityX = setRandomSpeed();
}


function setRandomSpeed(params) {
    let randInt = Math.floor(Math.random() * 2);
    if (randInt == 0){
        return -10;
     }
    if (randInt == 1) {
        return  10;
     }
}
onmousemove = function(e){
    console.log("Mouse Location" , e.clientX, e.clientY);
    mouseX = e.clientX;
    mouseY = e.clientY;
   

}

document.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        intervalId = setInterval(onTimerTick, 33);
        hitSound.play(); // optional: unlock audio
        console.log("Game started!");
    }
});
function onTimerTick() {

    ctx.clearRect(0,0,700,400);
    ctx.fillStyle = "#a7b2c2";
    playerY = mouseY - 200;

    if (playerY <= 0) {
        playerY = 0;
        console.log("below zero");
    }
    if (playerY >= 300) {
        playerY = 300;
    }

    if (ballX <= 0){
        ballX = 340;
        hitSound.play();
        ballVelocityX = setRandomSpeed();
    }

    if (ballX >= 700){
        ballX = 340;
        hitSound.play();
        ballVelocityX = setRandomSpeed();
    }
    if (ballX <= 30) {
        if (ballY >= playerY && ballY <= playerY +100)
        {
            ballVelocityX = ballVelocityX * -1;
        }
    }

    ctx.fillRect(playerX,playerY,10,100);
    ctx.fillRect(computerX,computerY,10,100);

    ctx.fillRect(ballX,ballY,20,20);
    
    if (playerY > computerY){
        computerY += 4;
    }
    if (playerY < computerY) {
        computerY -= 4;
    }
    ballX += ballVelocityX;
    console.log("player y is",playerY);
}
        


console.log("js is connected");