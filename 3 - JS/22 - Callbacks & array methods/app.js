//221 forEach
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function imprimir(elemento){
//     console.log(elemento)
// }
// numeros.forEach(imprimir)
//es mas comun pasar la funcion directamente como parametro en ves de crear una funcion separada
numeros.forEach(function (el) {
    console.log(el)
})
numeros.forEach(function (el) {
    if (el % 2 === 0) {  //numeros divisibles por 2
        console.log(el)
    }
})
//forEach perdio popularidad al salir el for..of
// for (let el of numeros) {
//     console.log(el)
// }

//222 .map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const dobles = numbers.map(function (num) {
    return num * 2;
})

//ejercicio codificacion 47
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (nombres) {
    return nombres.first;
})

//223
// const add = function(x,y) {
//     return x + y;
// }
//estas dos funciones son iguales solo que escritas diferentes
// const add = (x,y) => {
//     return x + y;
// }

// const square = num => {
//     return num * num;
// }

const rollDie = () => {
    return Math.floor(Math.random() * 6 + 1);
}

//ejercicio de codificacion 48
const greet = (string) => {
    return `Hey ${string}!`
}

//224
//explicit returns
//es lo mismo que la funcion de la clase 223 pero sin la keyword return y con parentesis en ves de corchetes
const square = (x) => (x * x)
//al hacer todo en  la misma linea podemos no usar los parentesis que contienen las acciones
const add = (a, b) => a + b

//225
const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1994
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019
    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }
]

// const newMovies = movies.map(function(movie){
//      return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)

//226
console.log("HOla!!")
setTimeout(() => {
    console.log("y que onda!?")
}, 3000)
//setInterval repite la accion (parametro 1) cada X tiempo (parametro 2)
const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

//clearInterval
clearInterval(id)

//prueba mia
const prueba = setInterval(() => {
    console.log(Math.random())
}, 1000)

const intervalo = setTimeout(() => {
    clearInterval(prueba)
}, 6000)

//227
numbers.filter(n => { //pasar todo esto en la consola
    return n < 10
})

//una nueva matriz con las peliculas mejor puntuadas
// const buenasPeliculas = movies.filter(movie => {
//     return movie.score > 80
// })

const buenasPeliculas = movies.filter(m => m.score > 90) //lo mismo que arriba
const buenosTitulos = buenasPeliculas.map(m => m.title)

movies.filter(m => m.score > 90).map(m => m.title); //lo mismo que arriba en un solo renglon


const malasPeliculas = movies.filter(m => m.score < 90) //lo mismo que arriba

//ejercicio codificacion 49
const usernames = (["mark", "staceysmom1978", "q91284u1094u0194u", "carrie9", "moanafan"])
// validUserNames.filter(m => validUserName[].length < 6)
// function validUserNames(usernames) {
//     return usernames.filter(function (username) {
//         if (username.length < 10) {
//             return username
//         }
//     })
// }
//solucion del video de youtube
// function validUserNames(usernames){
//     let filteredUsernames = usernames.filter(function(username) {
//         return username.length < 10;
//     })
//     return filteredUsernames;
// }
//solucion pensada por mi
// function validUserNames(matrizDeStrings) {
//     return matrizDeStrings.filter(function(nombresMenosDiez) {
//             return nombresMenosDiez;
//     })
// }
//solucion acortada por mi
function validUserNames(matrizDeStrings) {
    return matrizDeStrings.filter((nombremenosdiez) => nombremenosdiez.length < 10)
}

//228 some - every
movies.some(despuesQuince => despuesQuince.year > 2015) //verdadera xq hay 1
movies.every(despuesQuince => despuesQuince.year > 2015) //falso porque hay 1 sola d varias

//ejercicio de codificacion 50
const matrizDeNumeros = [2, 4, 6, 8]
const matrizDeNumeros2 = [1, 4, 6, 8]
function allEvens(matrizDeNumeros) {
    return matrizDeNumeros.every(evenNumbers => evenNumbers % 2 === 0)
}

//229
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0
// for (let price of prices) {
//     total += price
// }
// console.log(total)

const total = prices.reduce((total, price) => total += price)
console.log(total)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
})

//interactuando con objetos hay que tener un paso mas
const mayorPuntuada = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie
})
//como especificar el punto de partida para el acumulador
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)

//230
const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName)
        }, 3000)
    }
}
//haciendo lo mismo con arrow function NO FUCIONA
// const personArraowFunc = {
//     firstName: "Viggo",
//     lastName: "Mortensen",
//     fullName: () => {   //NO TIENE A DONDE REFERIRSE y va directo a window
//        return  `${this.firstName} ${this.lastName}`
//     }
// }

