//Eventos del DOM inputs

const inputNombre = document.querySelector(".nombre")
inputNombre.placeholder = "Un placeholder desde JS" // desde aquí puedo modificar las variables del HTML
//input captura todos los tipo de eventos, lo que escribo, lo qu epego, etc
inputNombre.addEventListener("input", function(e){
    // console.log("Escribiendo en el input")
    console.log(e.target.value)
})

// keydown : cuando escribes o presi9onas una tecla se ejecuta
/*
inputNombre.addEventListener("keydown", function(){
    console.log("Escribiendo en el input")
})*/

// keyup : cuando presionas y levantas la tecla
/*
inputNombre.addEventListener("keyup", function(){
    console.log("Escribiendo en el input")
})*/

const inputPassword = document.querySelector(".password")
inputPassword.addEventListener("input", funcionPassword)

function funcionPassword(e){
    inputPassword.type = "text"
    
    setTimeout(()=>{

        inputPassword.type = "password"

    },100)
}