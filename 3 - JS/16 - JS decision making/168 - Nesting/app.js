const contraseña = prompt("ingrese una nueva contraseña ")

// contraseña debe contener 6+ caracteres
// if (contraseña.length >= 6) {
//     console.log("contraseña con largo bien")
// } else {
//     console.log("CONTRASEÑA MUY CORTA - minimo 6 caracteres")
// }
// // contraseña no puede incluir espacios

// if (contraseña.indexOf(' ') === -1 ){
//     console.log("buen trabajo.. sin espacios")
// } else {
//     console.log("por favor no incluyas espacios en tu contraseña")
// }

// 2 if anidados haciendo lo mismo que arriba
if (contraseña.length >= 6) {
    if (contraseña.indexOf(' ') === -1) {
        console.log("buen trabajo.. sin espacios")
    } else {
        console.log("por favor no incluyas espacios en tu contraseña")
    }
} else {
    console.log("CONTRASEÑA MUY CORTA - minimo 6 caracteres")
}

