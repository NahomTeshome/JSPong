mouseX = null;
mouseY = null;

var canvas;
var ctx;

function loaded(params) {
     canvas = document.getElementById("canvas");
     ctx = canvas.getContext("2d");
   
     ctx.fillStyle = "#a7b2c2";
     ctx.fillRect(20,20,10,50);
 
      
}
onmousemove = function(e){
    console.log("Mouse Location" , e.clientX, e.clientY);
    mouseX = e.clientX;
    mouseY = e.clientY;
    ctx.clearRect(0,0,600,400);
    ctx.fillStyle = "#a7b2c2";
    ctx.fillRect(20,mouseY-190,10,50);
}

   
        


console.log("js is connected");