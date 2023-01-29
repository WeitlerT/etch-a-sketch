//Variables
const wrapper = document.querySelector('.grid-wrapper');
const lBtn = document.getElementById('lBtn');
const mBtn = document.getElementById('mBtn');
const sBtn = document.getElementById('sBtn');
let size = 16;
//Listeners
lBtn.addEventListener('click', tableSize);
mBtn.addEventListener('click', tableSize);
sBtn.addEventListener('click', tableSize);


function makeTable(n1,n2,size){
    for (let i=0; i < (n1*n2); i++){
        const div = document.createElement("div");
        wrapper.appendChild(div).className = `divCell ${size}`;
    }
}
makeTable(16,16,'small');

function tableSize(e){
    // console.log(e.target);
    // console.log(this.id);
    if (this.id == "lBtn"){
        console.log("LARGE");
        wrapper.innerHTML = '';
        makeTable(24,24,'large');
        startPaint();
    }
    else if(this.id == "mBtn"){
        console.log("MEDIUM");
        wrapper.innerHTML = '';
        makeTable(20,20,'medium');
        startPaint();
    }
    else if (this.id == "sBtn"){
        console.log("SMALL");
        wrapper.innerHTML = '';
        makeTable(16,16,'small');
        startPaint();
    }
}
function startPaint(){
    let cells = document.querySelectorAll("div.divCell");
    cells.forEach(cell => cell.addEventListener("mouseover", function(e){
        console.log("hello");
        e.target.style.backgroundColor = "black";
    }));
}

//Loop through all divCells and add event listener for hover
//add style on hover


// function paintCell(e){
//     e.target.style.backgroundColor = "black";
// }