
let buttonMore = document.getElementById("button-more")
buttonMore.addEventListener("click", add)
let buttonMinus = document.getElementById("button-minus")
buttonMinus.addEventListener("click",rest)
let inputItem = document.getElementById("input-item")

let conteo = 0;

function add(){
    conteo++;
    printInput(conteo)
}

function rest(){
    if(conteo > 0){
       conteo--
       printInput(conteo)
    }
}

function printInput(conteo){
   return inputItem.innerHTML = conteo
}