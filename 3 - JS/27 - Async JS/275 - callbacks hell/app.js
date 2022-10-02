// setTimeout(() => {
//     document.body.style.backgroundColor = "red"

// }, 1000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "orange"
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow"
// }, 3000)


//en ves de hacer varios setTimeout con distinto tiempo.. los anidamos
// setTimeout(() => { 
//     document.body.style.backgroundColor = "red"
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange"
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow"
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "blue"
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//podemos convertir esto en una funcion para poder reusarlo
const colorRetrasado = (nuevoColor, delay, losiguiente) => {
    setTimeout(() => {
        document.body.style.backgroundColor = nuevoColor;
        losiguiente && losiguiente(); //usamos operador logico por si no usamos anidamos otra funcion mas (la ultima funcion nunca va a tener otra funcion anidada)
    }, delay)
}

colorRetrasado("red", 1000, () => {
    colorRetrasado("orange", 1000, () => {
        colorRetrasado("yellow", 1000, () => {
            colorRetrasado("green", 1000, () => {
                colorRetrasado("blue", 1000, () => {

                })
            })
        })
    })
})
