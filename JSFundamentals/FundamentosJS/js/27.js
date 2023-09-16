
// fORMULARIO CON MENSAJE DE ERROR
const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", e=>{
    e.preventDefault() //previene el comportamiento, o sea no le manda a la pag que indica action
    const nombre = document.querySelector(".nombre").value
    //console.log(nombre)
    const password = document.querySelector(".password").value
    //console.log(password)
    //Voy a crear un elemento HTML a partir de JS, so es recomendable
    // escribir el HTML en Mayus, con el createElement (generaHTML)
    
    const alertaPrevia = document.querySelector(".alerta")
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    
    const alerta = document.createElement("DIV")
    alerta.classList.add("alerta")
    console.log(alerta)

    if(nombre === ""||password===""){
        alerta.textContent = "Todos los campos son obligatorios "
        alerta.classList.add("error")
    } else {
        alerta.textContent = "Todo bien"
        alerta.classList.add("exito")
    }
    formulario.appendChild(alerta)
})