//ejercicio 1
// return a+b;

// ejercicio 2
//     const redondeados = []
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] > 37 && grades[i] % 5 === 0) {
//             redondeados.push(grades[i])
//         } else if (grades[i] > 37 && (grades[i] + 1) % 5 === 0) {
//             redondeados.push(grades[i]+1)
//         } else if (grades[i] > 37 && (grades[i] + 2) % 5 === 0) {
//             redondeados.push(grades[i]+2)
//         } else {
//             redondeados.push(grades[i])
//         }        
//     }
//     return redondeados

//ejercicio 3

n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// respuesta = 3

function sockMerchant(n, ar) {
    // Write your code here
    let pares = 0
    const colores = ar

    for (let i = 0; i < colores.length; i++) {
        let busqueda = colores[i]
        for (let j = 1; j <= colores.length; j++) {
            if (busqueda === colores[j]) {
                colores.splice(i, 1)
                pares++
                console.log(busqueda)
                break
            }
        }
    }
    console.log(colores);
    return pares
}
