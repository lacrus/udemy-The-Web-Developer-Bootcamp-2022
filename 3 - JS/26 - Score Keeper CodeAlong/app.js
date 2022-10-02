const puntosJ1 = document.querySelector("#puntosJ1")
const puntosJ2 = document.querySelector("#puntosJ2")
const boton1 = document.querySelector("#boton1")
const boton2 = document.querySelector("#boton2")
const boton3 = document.querySelector("#boton3")
const limitePuntos = document.querySelector("#limitePuntos")

//boton para sumar puntos del jugador 1
let contadorJ1 = 0;
boton1.addEventListener('click', function (e) {
    updateDisplay(++contadorJ1);
    function updateDisplay(val) {
        puntosJ1.innerHTML = val;
    }
    if (contadorJ1 === parseInt(limitePuntos.value)) {
        puntosJ1.classList.add("ganador")
        puntosJ2.classList.add("perdedor")
        boton1.disabled = true
        boton2.disabled = true
    }
})

//boton para sumar puntos del jugador 2
let contadorJ2 = 0;
boton2.addEventListener('click', function (e) {
    updateDisplay(++contadorJ2);
    function updateDisplay(val) {
        puntosJ2.innerHTML = val;
    }
    if (contadorJ2 === parseInt(limitePuntos.value)) {
        puntosJ2.classList.add("ganador")
        puntosJ1.classList.add("perdedor")
        boton1.disabled = true
        boton2.disabled = true
    }
})

// boton para resetear los puntos a 0
boton3.addEventListener('click', function (e) {
    contadorJ1 = 0
    contadorJ2 = 0
    puntosJ1.innerHTML = "0"
    puntosJ2.innerHTML = "0"
    puntosJ1.classList.remove("ganador", "perdedor")
    puntosJ2.classList.remove("ganador", "perdedor")
    boton1.disabled = false
    boton2.disabled = false
})

//x si cambian la puntuacion del partido en el medio
limitePuntos.addEventListener('change', function (e) {
    contadorJ1 = 0;
    contadorJ2 = 0;
    puntosJ1.innerHTML = "0";
    puntosJ2.innerHTML = "0";
})


