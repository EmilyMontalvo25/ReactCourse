// Eventos de DOM
const heading = document.querySelector ('.heading')
heading.addEventListener("click", clickHeading ) // No manda a llamar la función,
// solo la pone "En espera", con le parentesis manda a llamar de una

function clickHeading(){
    heading.textContent = "Nuevo heading al dar click"
}