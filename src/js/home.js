console.log('hola mundo!');

//Dicho valor nunca cambia
const noCambia = "Diego";

//el valor puede ser modificado en un futuro
let cambia = "@DiegoValdez"

//Funcion al que pasamos un valor por parametro que dará valor a la variable cambia
function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}
