let respuesta = prompt("Bienvenido.. Ingresa tu comando");
const listaParaHacer = ["cortar el pasto", "pintar las uñas"]

while (respuesta !== "salir" && respuesta !== "q") {
    if (respuesta === "listar") {
        console.log("********************")
        for (let i = 0; i < listaParaHacer.length; i++) {
            console.log(`${i}: ${listaParaHacer[i]}`);
        }
        console.log("********************")
    } else if (respuesta === "nuevo") {
        const nuevoItem = prompt("Bien.. que quieres agregar");
        listaParaHacer.push(nuevoItem);
        console.log(`${nuevoItem}.. agregado a la lista!`)
    } else if (respuesta === "eliminar") {
        const eliminarIndex = parseInt(prompt("Bien.. ingresa el index a eliminar"));
        if (!Number.isNaN(eliminarIndex)) {
            const eliminado = listaParaHacer.splice(eliminarIndex, 1);
            console.log(`Bien.. eliminado ${eliminado[0]}`);
        } else {
            console.log("Index desconocido");
        }
    }
    respuesta = prompt("Ingresa un nuevo comando");
}
console.log("Gracias por utilizar Lista Para Hacer");