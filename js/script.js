
const favColor = document.querySelectorAll(".color__circle");
const clear = document.querySelector(".clear");

let penSize = 2;
let isDrawing;
let x;
let y;

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;

})

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    x = undefined;
    y = undefined;

})

canvas.addEventListener("mousemove", (event) => {
    draw(event.offsetX, event.offsetY);
})




function draw(x2,y2) {

    if (isDrawing) {
        c.beginPath();
        c.arc(x2,y2,penSize,0,Math.PI *2);
        c.closePath();
        c.fill();

        drawLine(x,y,x2,y2);
    }

    x = x2;
    y = y2;
}


function drawLine(x1,y1,x2,y2) {

    c.beginPath();
    c.moveTo(x1,y1)
    c.lineTo(x2,y2)
    c.strokeStyle = c.fillStyle;;
    c.lineWidth = penSize * 2;
    c.stroke()
}



clear.addEventListener("click" , () => {
    c.clearRect(0,0,canvas.width,canvas.height);
})


const selectColor = (el) => {
    c.fillStyle = el.getAttribute('data-color');
    el.classList.add('active');

    removeCircle();
}

const removeCircle = () => {
    favColor.forEach((circle) => {
        circle.classList.remove('active');
    })
}

function sizeChange(pensize){
    penSize = pensize;
}

const colorPicker = (el) => {
    c.fillStyle = el.value;
}



document.querySelector('a').addEventListener('click', (e) => {
    e.target.href = canvas.toDataURL()
})