let container = document.getElementById("container");
let total = document.getElementById("total");
let numTotal = 0;
total.innerHTML = numTotal;
let sonido = new Audio("sonido.wav");
let sonido100 = new Audio("sonido1.wav");

window.addEventListener("load", function() {
    sonido.load();
    sonido100.load();
})

container.addEventListener("click", function() {
    numTotal++;
    total.innerHTML = numTotal;
    /*
    Para hacer que el container cambie de color y aparezca la
    palabra contando.
    Solo hace el cambio de color en el primer click y hay que
    mejorar el estilo de la palabra contando:
    
    container.style.backgroundColor = "lightseagreen";
    container.innerHTML = "Contando";
    */
   sonido.play();
   if (numTotal === 100) {
       sonido100.play();
       sonido.pause();
   }
});

/*
Para contar presionando cualquier tecla.
Tiene un bug con la barra de espacio y enter:
*/

document.addEventListener("keypress", function() {
    numTotal++;
    total.innerHTML = numTotal;
});


let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Último contaje: " + numTotal);
    numTotal = 0;
    total.innerHTML = numTotal;
});

let crg = document.getElementById("crg");

crg.addEventListener("click", function() {
    numTotal--;
    if (numTotal < 0) {
        numTotal = 0;
    }
    total.innerHTML = numTotal;
});