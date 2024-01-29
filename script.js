// document.getElementById("count").innerText=5;
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0;
function increment(){
    // count = count + 1;
    count += 1;
    countEl.textContent= count;
    console.log(count)
}

function save() {
    let saveStr = count + " -" ;
    saveEl.textContent += saveStr ;
    countEl.textContent = 0;
    count = 0;
}