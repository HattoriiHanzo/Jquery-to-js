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



//Una de las características mas solicitadas al momento de desarrollar una app dinámica en javaScript es que tu puedas
//pedir nuevos datos a un servidor o algún servicio al cual denominamos API y normalmente para hacer esto se utiliza
//una técnica llamada AJAX
//ABAJO ESTÁ UNOS EJEMPLOS EN JQUERY Y JS VANILA

//Esto de aca abajo es el Jquery ajax, es decir un XMLHttpsRequest que sirve para pedir datos a un servicio externo
$.ajax('https://randomuser.me/api/dededede',{
  method: 'GET',
  //success solo se realizará si todo sale correcto
  success: function(data){
    console.log(data)
  },
  error: function(error){
    console.log(error)
  }
})

//Js vanila
fetch('https://randomuser.me/api/')
  .then(function(response){
    //console.log(response)
    return response.json()
  })
  .then(function(user){
    console.log('user', user.results[0].name.first)
  })
  .catch(function(){
    console.log('algo falló')
  })
