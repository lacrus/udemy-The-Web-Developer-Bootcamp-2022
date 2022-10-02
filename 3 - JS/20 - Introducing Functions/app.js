//crear una funcion
function cualquiercosa() {
    console.log("hola que tal");
    console.log("soy la primer funcion");
    console.log("que hago en mi vida");
}
//ejecutar una funcion
function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}
singSong() //esto se va a trasladar a la consola

// ejercicio codificacion 35
// function printHeart() {
//     console.log("<3")
// }
// printHeart()

//crear un argumento
function greet(firstName) {
    console.log(`Hola!! ${firstName}`)
}

//ejercicio codificacion 36
function rant(message){
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
rant("este es prueba")

//multiples argumentos
function saludo(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido[0]}.`)
}

function repetir(frase, repeticiones) {
    let resultado = ""
    for (let i = 0; i < repeticiones; i++) {
        resultado += frase;
    }
    console.log(resultado);
}

//ejerciocio codificacion 37
function isSnakeEyes(primerNumero, segundoNumero) {
    if (primerNumero === 1 && segundoNumero === 1) {
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

//RETURN keyword
function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y; //no hace falta poner el else ya que este return solo va a pasar si no pasa el anterior
    // let sum = x  + y;
    // return sum;
}


//ejercicio codificacion 38
function multiply(num1, num2) {
    console.log(`${num1 * num2}`)
    return num1 * num2;
}

//ejercicio codificacion 39
function isShortsWeather(temperatura) {
    if (temperatura >= 75) {
        return true;
    }
    return false;
}

//ejercicio codificacion 40
function lastElement(matriz) {
    if (matriz.length === 0) {
        return null;
    } return matriz[matriz.length - 1]
}

//ejercicio codificacion 41
function capitalize(algo) {
    let primeraLetra = algo.slice(0, 1).toUpperCase();
    let restoLetras = algo.slice(1)
    return primeraLetra + restoLetras
}

//ejercicio codificacion 42
function sumArray(matrizsuma) {
    let suma = 0;
    for (let i = 0; i < matrizsuma.length; i++) {
        suma += matrizsuma[i];
    }
    return suma
}

//ejercicio codificacion 43
// function returnDay(dia) {
//     // const semana = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
//     if (dia === 1) {
//         return "Monday";
//     } else if (dia === 2) {
//         return "Tuesday"
//     } else if (dia === 3) {
//         return "Wednesday"
//     } else if (dia === 4) {
//         return "Thursday"
//     } else if (dia === 5) {
//         return "Friday"
//     } else if (dia === 6) {
//         return "Saturday"
//     } else if (dia === 7) {
//         return "Sunday"
//     } else {
//         return null
//     }
// }

function returnDay(dia) {
    const semana = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }
    if (dia < 1 || dia > 7) {
        return null
    } else {
        return semana[dia]
    }
}