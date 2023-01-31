//DOM Variables
const wrapper = document.querySelector('.grid-wrapper');
const lBtn = document.getElementById('lBtn');
const mBtn = document.getElementById('mBtn');
const sBtn = document.getElementById('sBtn');
const rgbBtn = document.getElementById('rgbBtn');
const blackBtn = document.getElementById('blackBtn');

//Global Variables
let color = "black";
let size = 16;

//Listeners
lBtn.addEventListener('click', tableSize);
mBtn.addEventListener('click', tableSize);
sBtn.addEventListener('click', tableSize);
rgbBtn.addEventListener('click', function(){
    color = randomRGB();
});
blackBtn.addEventListener('click', function(){
    color = "black";
});

//Random RGB color
function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return(RGBColor);
  }

//Our function for making the table. Its just taking in 2 numbers
//and a size which is really just to help us with css class selectors
//its appending as many cells(divs) as needed for table
function makeTable(n1,n2,size){
    for (let i=0; i < (n1*n2); i++){
        const div = document.createElement("div");
        wrapper.appendChild(div).className = `divCell ${size}`;
    }
}
makeTable(16,16,'small');

function tableSize(e){
    //e is event being passed (the btn pressed)
    //'this' referring to button and we are grabbing id to check
    //Generate the board based off option chosen
    if (this.id == "lBtn"){
        console.log("LARGE");
        wrapper.innerHTML = '';
        wrapper.style.gridTemplateColumns = "repeat(24, 1fr)";
        makeTable(24,24,'large');
        startPaint();
    }
    else if(this.id == "mBtn"){
        console.log("MEDIUM");
        wrapper.innerHTML = '';
        wrapper.style.gridTemplateColumns = "repeat(20, 1fr)";
        makeTable(20,20,'medium');
        startPaint();
    }
    else if (this.id == "sBtn"){
        console.log("SMALL");
        wrapper.innerHTML = '';
        wrapper.style.gridTemplateColumns = "repeat(16, 1fr)";
        makeTable(16,16,'small');
        startPaint();
    }
}
//Loop through all divCells and add event listener for hover
//add style on hover
function startPaint(){
    let cells = document.querySelectorAll("div.divCell");
    cells.forEach(cell => cell.addEventListener("mouseover", function(e){
        // console.log("hello");
        e.target.style.backgroundColor = color;
    }));
}

startPaint();