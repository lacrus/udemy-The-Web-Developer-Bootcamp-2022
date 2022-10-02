// while loop
// preguntar pro alguna entrada ¿que queres hacer? prompt
// seguir preguntand que quiere hacer hasta que ponga salir 

//usar una matriz para almacenar las opciones de las acciones

// litaParaHacer[]

// 
//splice para eliminar


//"nuevo" - Agregar a la lista</li>
//"listar" - Imprimir lista</li>
//"eliminar" - Remover determinado index</li>
//"salir" - Salir de aplicación</li>




let input = prompt("Bienvenido.. ingresa nuevo para comenzar")
const listaParaHacer = ["comer", "cojer", "cagar"]
while (input !== "salir" && input !== "q") {
    if (input.toLowerCase() === "listar") {
        console.log("***************")
        for (let i = 0; i < listaParaHacer.length; i++) {
            console.log(`${i}: ${listaParaHacer[i]}`)
        }
        console.log("***************")
    } else if (input.toLowerCase() === "nuevo") {
        let nuevoParaHacer = prompt("Que deseas agregar a la lista!?");
        listaParaHacer.push(nuevoParaHacer);
        console.log(`${nuevoParaHacer}, agregado a la lista!!`)
    } else if (input.toLowerCase() === "eliminar") {
        let eliminarParaHacer = parseInt(prompt("¿Que numero de INDEX deseas eliminar?"));
        if (!Number.isNaN(eliminarParaHacer)) {
            const eliminado = listaParaHacer.splice(eliminarParaHacer, 1);
            console.log(`Bien.. eliminado ${eliminado[0]}`);
        } else {
            console.log("Index desconocido");
        }
    }
    input = prompt("Ingresa un nuevo comando");
}
console.log("Gracias por utilizar Lista Para Hacer");