
const tecnologias = ["HTML", "CSS", "React", "JavaScript", "NodeJs"]

const newArray = tecnologias.map( tech =>{
    if(tech === "CSS"){
        return "Hola"
    } else {
        return tech
    }
})
console.table(newArray)



const newArray2 = tecnologias.filter(tech =>tech !== "CSS")
console.table(newArray2)
