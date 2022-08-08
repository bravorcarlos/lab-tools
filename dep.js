let inputVolumen = document.getElementById("volumen");
let volumen = 0;
let inputOrina = document.getElementById("orina");
let orina = 0;
let inputSuero = document.getElementById("suero");
let suero = 0;
let calc = document.getElementById("calc");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let suma = 0;

inputVolumen.addEventListener("change", function() {
   let newVolumen = Number(inputVolumen.value);
   volumen = newVolumen;
});

inputOrina.addEventListener("change", function() {
   let newOrina = Number(inputOrina.value);
   orina = newOrina;
});

inputSuero.addEventListener("change", function() {
   let newSuero = Number(inputSuero.value);
   suero = newSuero;
});

calc.addEventListener("click", function() {
   if (volumen === 0) {
      alert("Todos los valores son requeridos");
   } else if (orina === 0) {
      alert("Todos los valores son requeridos");
   } else if (suero === 0) {
      alert("Todos los valores son requeridos");
   } else {
      let volMin = volumen / 1440;
      let depCreat = orina * volMin / suero;
      result.innerHTML = depCreat.toFixed(2) + " mL/min";
   }
});

reset.addEventListener("click", function() { 
   alert("Ultimo resultado: " + result.innerHTML);
   inputVolumen.value = "";
   inputOrina.value = "";
   inputSuero.value = "";
   volumen = 0;
   orina = 0;
   suero = 0;
   suma = 0;
   result.innerHTML = "Ingrese sus valores para calcular";
});

window.addEventListener("load", function() {
   result.innerHTML = "Ingrese sus valores para calcular";
   inputVolumen.value = "";
   inputOrina.value = "";
   inputSuero.value = "";
   volumen = 0;
   orina = 0;
   suero = 0;
   suma = 0;
});