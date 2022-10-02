let movieLine = ["tom", "nancy"];

// movieLine[2] = "pedro"

movieLine.push("pedro", "silvia", "juan");
movieLine.pop();

let persona = movieLine.pop();
movieLine.pop();


//ejemplo de .push y .pop.. como si fuera la barra del gimnasio
// vas poniendo pesas de a una y despues sacas de a una
let barra = []
barra.push(45)
barra.push(45)
barra.push(10)
barra.pop()
barra.pop()
barra.pop()

// con .shift eliminamos desde el principio
// aca movieLine deberia ser un array vacio
movieLine.shift()
movieLine.shift()

// con .unshift agregamos valores al principio del array
movieLine.unshift("liliana", "mario", "sebastian")
movieLine.unshift("juan cruz")

//.concat
let gatos = ["simba", "chupate"]
let perros = ["homero", "chocolate"]

let mascotas = gatos.concat(perros); // mascotas queda: 'simba', 'chupate', 'homero', 'chocolate'

//.includes
gatos.includes("simba") //poniendo esta expresion en la consola tenemos como respuesta TRUE

//.indexOf funciona de forma similar al indexOf de los string
mascotas.indexOf("simba") //poner la expresion en la consola

// .reverse
// da vuelta el array original.. moficicandolo.. no crea uno nuevo
mascotas.reverse() // mascotas queda: 'chocolate', 'homero', 'chupate', 'simba'

// .slice
mascotas.slice(2,4) // poner expresion en consola quedaria: 'chupate', 'simba'
mascotas.slice(-3) // poner expresion en consola quedaria: 'homero', 'chupate', 'simba'

// .splice
// .splice para eliminar
mascotas.splice(0,2) //mofifica el array original que quedaria: 'chupate', 'simba'
// .splice para agregar
mascotas.splice(0,0, 5, null, undefined, "homero")
// .splice para modificar "en el index 0, eliminamos 3 elementos, y agregamos chocolate"
mascotas.splice(0,3,"chocolate")

//.sort
let numeros = [-12, 0, 1, 17, 100, 25, 2300, 34, 70, 9];
numeros.sort()