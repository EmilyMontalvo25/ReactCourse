// Manipular elemento HTML con JS
const heading = document.querySelector ('.heading')
heading.textContent = "Un nuevo Heading"
console.log(heading.textContent)

// Le agrego un valor
const inputNombre = document.querySelector("#nombre")
inputNombre.value = "Un valor por defecto" // le agrego algo que no tiene
console.log(inputNombre)

// Cambiar nombre de los enlaces 
const enlaces = document.querySelectorAll ('.navegacion a') 
enlaces.forEach(enlace => enlace.textContent = "Nuevo Enlace");