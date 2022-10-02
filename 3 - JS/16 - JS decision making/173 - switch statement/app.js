const dia = 8;
// la semana empieza en lunes

if(dia === 1){
    console.log("lunes")
}else if (dia === 2) {
    console.log("martes")
}else if (dia === 3) {
    console.log("miercoles")
}else if (dia === 4) {
    console.log("jueves")
}else if (dia === 5) {
    console.log("viernes")
}else if (dia > 5 && dia < 8) {
    console.log("es fin de semana")
}else { 
    console.log("la semana tiene 7 dias")
}

// switch (dia) {
//     case 1:
//         console.log("lunes");
//         break;
//     case 2:
//         console.log("martes");
//         break;
//     case 3:
//         console.log("miercoles");
//         break;
//     case 4:
//         console.log("jueves");
//         break;
//     case 5:
//         console.log("viernes");
//         break;
//     case 6:
//     case 7:
//         console.log("es fin de semana");
//         break;
//     default: console.log("No es un dia valido")
// }     