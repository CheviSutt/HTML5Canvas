let drawCanvas = document.getElementById("myCanvas");
let ctx = drawCanvas.getContext("2d");
let shapeArray = [];

drawCanvas.addEventListener("click", onPress);

function onPress(evt) {
    let mouseX = evt.offsetX;
    let mouseY = evt.offsetY;


    let vertexArray = [mouseX, mouseY];
    shapeArray.push(vertexArray);

        ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);

        for (let i = 0; i < shapeArray.length; i++) {
            let spotx = shapeArray[i][0];
            let spoty = shapeArray[i][1];

            if (i === 0) {
                ctx.beginPath();
                ctx.moveTo(spotx, spoty);
            }

            else {
                ctx.lineTo(spotx, spoty);
            }
        }
        ctx.stroke();
        ctx.fillStyle = "rgba(0,0,0, 0.3)";
        ctx.fill();
    }

function closeShape() {
    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    for (let i = 0; i < shapeArray.length; i++) {
    let spotx = shapeArray[i][0];
    let spoty = shapeArray[i][1];

    if (i === 0) {
        ctx.beginPath();
        ctx.moveTo(spotx, spoty);
    }

    else {
        ctx.lineTo(spotx, spoty);
    }
}

    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0, 0.3)";
    ctx.fill();
}

/*ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(350,75);
ctx.lineTo(250,250);
ctx.closePath();//closes where you start and stop
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0.5)";
ctx.fill();*/




