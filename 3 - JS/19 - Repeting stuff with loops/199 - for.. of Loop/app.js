const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visita Reddit.com/r/${subreddits[i]}`)
}

for (let sub of subreddits) {
    console.log(`Visita Reddit.com/r/${sub}`)
}


// for..of loop anidados con el ejemplo de los asientos del otro app.js
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// de esta formas imprimis lo mismo que arriba pero con el bucle for..of
for (let row of seatingChart) {
    for (let students of row) {
        console.log(students)
    }
}

//loop for of sobre una cadena
// for (let char of "54161564") {
//     console.log(char)
// }

//ejercicio codificacion 34
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let numb of numbers) {
//     console.log(numb * numb);
// }

//LOOP FOR IN - loops para los objetos literales
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shaw: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    yonnie: 60
}
for (let personas in testScores) {
    console.log(personas) //aca imprime solamente los keywords y no los valores de cada uno
}

//para poder imprimir los valores de un OBJETO podemos usar diferentes formas
//usando string template literals
for (let personas in testScores) {
    console.log(`${personas} marco ${testScores[personas]}`)
}
//usando .Methods propio de los objetos para convertilos en matrices y usar For..of
//.method entries
for (let puntajes of Object.entries(testScores)) {
    console.log(puntajes[0], "marco", puntajes[1]);
}


//ejemplo video promedio puntos y total marcado
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log("total", total)
console.log("promedio", total / scores.length)