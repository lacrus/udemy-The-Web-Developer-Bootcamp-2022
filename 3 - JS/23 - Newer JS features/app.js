//232 DEFAULT PARAMS
function DADO(ladosDado = 6) {
    return Math.floor(Math.random() * ladosDado) + 1
}

//sin la nueva sintaxis usariamos conditional statements
// function DADO (ladosDado) {
//     if (ladosDado === undefined) {
//         ladosDado = 6
//     }
//     return Math.floor(Math.random() * ladosDado) + 1
// }

function multiplicacion(num1 = 2, num2 = 3) {
    return num1 * num2
}

//233
Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) //si pasamos en la consola buscamos en numero mas alto

const numeroMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Math.max(numeroMax) //esto no funciona en la consola porque tenemos una matriz y no varios valores
Math.max(...numeroMax) //con el Spread.. agarra la matriz y separa cada valor como diferentes afgumentos

console.log("HOLA")
console.log(..."HOLA") //va a tomar cada letra como un argumento.. y va a imprimirlo con un espacio entre medio a cada letra

//234
//convertir 2 matrices en una tercera matriz
const cats = ["blue", "scout", "rocket"];
const dogs = ["rusty", "wyatt"];

const allPets = [...cats, ...dogs, "otra cosa mas que quiera agregar"]

//235
const feline = { legs: 4, family: "felidae" };
const canine = { isFurry: true, family: "cainae" }

const animals = { ...feline, ...canine, kajbn: "kladjb" }

//spread una matriz en un objeto.. toma el index de la matriz para usarlo como keyword
// {...[1,2,3,4,5,6]} //pasar en consola

//236
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

//237 matriz destructuring
const scoresDestructuring = [6516651, 2161656, 65163164196, 35651616, 63165166, 321651631]

const highScore = scoresDestructuring[0];
const seconHighScore = scoresDestructuring[1];

const [gold, silver, ...losOtros] = scoresDestructuring;
console.log("gold:", gold, "silver:", silver)
console.log(losOtros)

//238 objetos destructuring
const useradfad = {
    email: "lsdjbasjnñafn",
    password: "ñskdjnñadvn",
    firstName: "ñajbnaon",
    lastName: "ñakdjsfnañ",
    born: 1930,
    died: 6332,
    bio: "añskjfgvbajgvovpaiosvni bai baj ioan iabansdvabfo a ",
    city: "sañfjnnf ñd",
    state: "asigvbsjvb"
}

// const primernombre = useradfad.firstName
// const apellido = useradfad.lastName
// CREAR VARIABLES desde objeto.. cambiando el nombre de la varibale al crearla
// const { email : direccionDeCorreo, password: contraseña, died : fechaMuerte } = useradfad;

const useradfad2 = {
    email: "shsdhsd",
    password: "asgasgasg",
    firstName: "ahagagag",
    lastName: "haagafh",
    born: 1332
}
// agregar default values a nuevas variables desde objetos
// const muertesuser2 = useradfad2.died
const { email : email, password, died : fechaMuerte = "N/A"} = useradfad2

//239
function nombrecompleto(user) {
    return `${useradfad.firstName} ${useradfad.lastName}`
}

function nombrecompletodestructuring({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

nombrecompletodestructuring(useradfad2) //pasar en consola 