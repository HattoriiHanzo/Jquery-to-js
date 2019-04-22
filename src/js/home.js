console.log('hola mundo!');

//Dicho valor nunca cambia
const noCambia = "Diego";

//el valor puede ser modificado en un futuro
let cambia = "@DiegoValdez"

//Funcion al que pasamos un valor por parametro que dará valor a la variable cambia
function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise (function(todoBien, todoMal){
  //Llamar a una api
  setTimeout(function(){
    //Luego de 3 segundos ejecutará lo siguiente
    todoBien('Se acabó el tiempo');
  },5000)

})

const getUser = new Promise (function(todoBien, todoMal){
  //Llamar a una api
  setTimeout(function(){
    //Luego de 3 segundos ejecutará lo siguiente
    todoBien('Se acabó el tiempo 2.0');
  },3000)

})

// getUser
//   .then(function(){
//     console.log('Todo está bien en la vida')
//   })
//   .catch(function(message){
//     console.log(message)
//   })

// si se pone Promise.race solo se visualizará la promesa que se resulva antes, este caso la segunda, la 2.0
// ya que tarda 3 segundos y no 5
Promise.all([
  getUser,
  getUserAll
])
  .then(function(message){
    console.log(message)
  })
  .catch(function(message){
    console.log(message)
  })
