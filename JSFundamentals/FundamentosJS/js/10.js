// Destructuring de Arrays

const tecnologias = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]
const[html, nodejs]= tecnologias // Extrae segun las posiciones 
console.log(html) // imprime HTML
console.log(nodejs) //imprime CSS
console.log("===============================")
const tecnologias1 = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]
const[var0, var1, var2, var3, var4 ] = tecnologias1 // Extrae segun las posiciones 
console.log(var0)
console.log(var1)
console.log(var3)
console.log(var4)

console.log("===============================")
const tecnologias2 = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]
const[,,,, var5 ] = tecnologias2 // Evito crear variables innecesarias
console.log(var5)