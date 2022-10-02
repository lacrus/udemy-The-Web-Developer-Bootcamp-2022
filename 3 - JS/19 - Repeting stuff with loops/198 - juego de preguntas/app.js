let maximo = parseInt(prompt("ingresa el numero maximo"));

while (!maximo) {
    maximo = parseInt(prompt("ingresa un numero valido"))
}

const targetNum = Math.floor(Math.random() * maximo) + 1;
console.log(targetNum)

let guess = parseInt(prompt("ingresa tu primer respuesta!"));
let intentos = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    intentos++;
    if(guess > targetNum) {
        guess = prompt("Demasiado alto! ingresa una nueva respuesta:");
    } else {
        guess = prompt("Demasiado bajo! ingresa una nueva respuesta:");
    }
}

if (guess === "q") {
    console.log("Renunciaste cagon!!")
}else {
    console.log("Ganador!!")
    console.log(`Lo tienes!! Te tomo ${intentos} intentos`)

}
