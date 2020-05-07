//canvas setting
var canvas = document.getElementById("pde");
var ctx = canvas.getContext('2d');


//------------------------------------------------------

// img loadding------------------------------------------
if (preLoadImages()) {

}

//------------------------------------------------------

var x = 10;

// main draw

function drawSoil() {

}




function draw() {

    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    //ctx.strokeRect(50, 50, 50, 50);


    console.log("dd");

    window.requestAnimationFrame(draw);
}

draw();


