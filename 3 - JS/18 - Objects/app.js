//como crear un Objeto literal
const primerObjeto = {
    nombre: "Juan Cruz",
    apellido: "Musso",
    edad: 33,
    deporte: ["futbol", ["boxeo recreativo", "boxeo profesional", "boxeo dramatico"], "basquet"]
}

const años = {
    1999: "Bueno",
    2020: "Malo",
}

//como buscar cosas
primerObjeto["nombre"] //escribir en la consola
primerObjeto.nombre //escribir en la consola

primerObjeto["nom" + "bre"] //escribir en la consola

// con los corchetes podemos buscar variables
let añoNacimiento = 2020
años[añoNacimiento] //escribir en la consola

//MODIFICAR OBJETOS
const parciales = { daniela: 96, tomas: 78 };
parciales.tomas = 79;
//agregar valores al objeto
parciales["juan"] = 80;

// ANIDANDO objetos y matrices
const comentarios = [
    {usuario: "acrus06", texto: "comentario1", votos: 9},
    {usuario: "segundo", texto: "comentario2", votos: 1}
]

//como buscar enuna matriz que tiene objetos dentro
comentarios[1].texto //escribir en la consola
//como buscar en un objeto que tiene matrices dentro
primerObjeto.deporte[1] //escribir en la consola