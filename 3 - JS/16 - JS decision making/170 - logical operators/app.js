// true && true

// const contraseña = prompt("ingresa tu contraseña")

// if (contraseña.length >= 6 && contraseña.indexOf(" ") === -1){
//     console.log("contraseña correcta")
// } else {
//     console.log("contraseña incorrecta")
// }

// 0-5 gratis
// 5-10 $10
// 10-65 $20
// 65+ gratis

const age = prompt("ingresa tu edad");
if(age >= 0 && age < 5 || age >=65) {
    console.log("gratis")
}else if (age >= 5 && age < 10) {
    console.log("$10")
}else if (age >= 10 && age < 65) {
    console.log("$20")
}else {
    console.log("me parece que no naciste")
}


