//canvas setting
var canvas = document.getElementById("pde");
var ctx = canvas.getContext('2d');


//------------------------------------------------------

// img loadding------------------------------------------
preLoadImages();

//------------------------------------------------------

// main draw

function drawSoil() {

}


function update(){
    
}

function draw() {

    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    //ctx.strokeRect(50, 50, 50, 50);


    window.requestAnimationFrame(draw);
}

draw();
//update();
var frame = setInterval(update,1000/60);


