console.log("Hola desde mi primer archivo JS")

let rating = 3;
if (rating === 3) {
    console.log("Eres una super-estrella")
}

if (1 + 1 === 2) {
    console.log("LAS MATEMATICAS FUNCIONAN")
}


console.log("antes del 2 condicional q es false")
if (1 + 1 === 3) {
    console.log("segundo condicional que daria FALSE")
}
console.log("despues del 2 condicional q es false")

console.log("antes del 3 condicional")
let random = Math.random();
if (random < 0.5) {
    console.log("3 condicional si aparece el random es menor a 0.5")
    console.log(random)
}
console.log("despues del 3 condicional")

console.log("antes del 4 condicional")
let random1 = Math.random();
if (random1 >= 0.5) {
    console.log("4 condicional si aparece el random es mayor a 0.5")
    console.log(random1)
}
console.log("despues del 4 condicional")


// Ejercicio codificacion clase 165
// function isEven(num) {
//WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
// let result = num % 2

// if (result === 0) {
//     console.log("even")
// }
//AND THIS LINE ↑↑↑↑↑
// }


// ELSE IF
// const diaDeLaSemana = "Viernes"

// if (diaDeLaSemana === "Lunes") {
//     console.log("odio los lunes")
// }
// else if (diaDeLaSemana === "Sabado") {
//     console.log("adoro los sabados")
// }
// else if (diaDeLaSemana === "Viernes") {
//     console.log("aguanten los viernes")
// }

// 0a5 gratis 5a10 child $10 10a65 adult $20 65+ senior $10

const age = 70;
const preciosenior = 10
if (age < 5) {
    console.log("Eres un menor entras GRATIS")
} else if (age < 10) {
    console.log("Eres un niño. abonas $10")
} else if (age < 65) {
    console.log("Eres un adulto. abonas $20")
} else if (age >= 65) {
    console.log(`Eres un anciano. abonas $${preciosenior}`)
}

// ELSE
const diaDeLaSemana = prompt("ingresa un dia").toLowerCase();

if (diaDeLaSemana === "lunes") {
    console.log("odio los lunes")
}else if (diaDeLaSemana === "sabado") {
    console.log("adoro los sabados")
}else if (diaDeLaSemana === "viernes") {
    console.log("aguanten los viernes")
}else {
console.log("baa")
}

let phrase = "yellow"

// EJERCICIO CLASE 167
// function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
       if (phrase === "stop"){
        console.log("red")
    }else if (phrase === "slow") {
        console.log("yellow")
    }else if (phrase === "go") {
        console.log("green")
    }else {
        console.log("purple")
    }
       //AND THIS LINE ↑↑↑↑↑
// }