//Eventos del DOM submit

const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", e=>{
    e.preventDefault() //previene el comportamiento, o sea no le manda a la pag que indica action
    const nombre = document.querySelector(".nombre").value
    //console.log(nombre)
    const password = document.querySelector(".password").value
    //console.log(password)

    if(nombre === ""||password===""){
        console.log("Todos los campos deben ser llenados")
    } else {
        console.log("Todo bien, enviando...")
    }
})