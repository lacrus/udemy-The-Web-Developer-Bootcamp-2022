//Ejercicio codificacion 44
// let square = function (numero) {
//     return numero * numero;
// }

//214
let greet = function () { console.log("Hola") }

function callTwice(func) {
    func();
    func()
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

//215
//solo un ejemplo de como es tener una funcion como retorno.. totalmente inservible este ejemplo
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Felicitaciones, soy una buena funcion")
            console.log("Ganaste un millon de dolares")
        }
    } else {
        return function () {
            alert("coputadora infectada")
            alert("no intenes cerrar")
        }
    }
}

//funcion como retorno
function haceEntreFuncion(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
haceEntreFuncion(100, 200) //copiar en consola
const esNiño = haceEntreFuncion(0, 18) //creamos una variable funcion desde una variable que contenga la funcion principal con los valores que necesitamos
esNiño(15) //resultado TRUE... porque es niño lo pasa como funcion dentro del 0,18
const esSenior = haceEntreFuncion(65, 120)
esSenior(200) //daria false porque no est entre 65 y 120 

//216
//crear mi propio .method - creando un objeto que contiene varios keywords con valores que son funciones y 
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

//ejercicio codificacion 45
const square = {
    area(num) {
        return num * num
    },
    perimeter(num) {
        return num * 4
    },
}

//217
const cat = {
    name: "simba",
    color: "naranja",
    breed: "de la calle",
    meow() {
        console.log(`dice ${this.name} meaw meaw meaw`)
    },
    color() {
        console.log(`${this.name} es de color ${this.color}`);
    }
}

//ejercicio codificacion 46
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG"
    }
}

//218
try {
    hello.toUppercase()
} catch {
    console.log("ERROR!!")
}
console.log("el TRY da error.. pero el codigo sigue corriendo")