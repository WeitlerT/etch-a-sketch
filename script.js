const wrapper = document.querySelector('.grid-wrapper');

function makeTable(){
    for (let i=0; i < 256; i++){
        const div = document.createElement("div");
        wrapper.appendChild(div).className = 'divCell';
    }
}
makeTable();

let cell = document.querySelectorAll('divCell');


//Add style on hover