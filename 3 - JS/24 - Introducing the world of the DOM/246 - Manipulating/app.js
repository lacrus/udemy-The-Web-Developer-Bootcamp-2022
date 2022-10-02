//246
document.querySelector("p").innerText // pasar en la consola

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}

document.querySelector("h1").innerHTML += "<sup>con.innerHTML</sup>"

// 247
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

//acceder a los atributos
document.querySelector("a").href //pasar en consola
document.querySelector("a").title //pasar en consola

//acceder con .method .getAttribute
const primerLink = document.querySelector("a");
primerLink.href //pasar en consola.. ver diferencia de obtener href con .method o el anterior este toma directo del html
primerLink.getAttribute("href") //pasar en consola.. ver diferencia de obtener href con .method o el anterior este toma directo del html
primerLink.getAttribute("id") //pasar en consola.. si pasamos atributo que no hay devuelve null

//modificar los atributos
document.querySelector("#banner").id = "whooops"
document.querySelector("#whooops").id = "banner"

//modificar con .method .setAttribute
primerLink.setAttribute("href", "https://www.google.com")

const entrada = document.querySelector("input[type=text]")
entrada.type = "password" //cambia el tipo de input a password
entrada.type = "color" //cambia el tipo de input a color

entrada.setAttribute("type", "text") // usamos .setAttribute para modificiar y volver a tipo texto

//ejercicio codificacion 54
const imagen = document.querySelector("img")
imagen.setAttribute("src", "https://devsprouthosting.com/images/chicken.jpg")
imagen.setAttribute("alt", "chicken")

//248 manipular estilos .style
const h1 = document.querySelector("h1")
h1.style.color = "green" 
h1.style.fontSize = "3em"
h1.style.border = "2px solid pink" 

for (let negrita of allLinks) {
    negrita.style.color = "yellow";
    negrita.style.textDecorationColor = "magenta";
    negrita.style.textDecorationStyle = "wavy"
}

window.getComputedStyle(h1) //pasar en la consola (aca paso h1 proque lo guarde en la variable)
window.getComputedStyle(h1)["0"]
window.getComputedStyle(h1).fontSize
window.getComputedStyle(h1).fontFamily
window.getComputedStyle(h1).marginLeft
window.getComputedStyle(h1).margin
 

//ejercicio codificacion 55
// const elDiv = document.querySelector("#container");
// elDiv.style.textAlign = "center"

// const imag = document.querySelector("img")
// imag.style.width = "150px"
// imag.style.borderRadius = "50%"

//249
const h2 = document.querySelector("h2")
// h2.getAttribute("class") //pasamos en la consola para saber si hay alguna clase establecida (no hay)

// h2.setAttribute("class", "purple") //crea la class y le da valor de purple
// h2.setAttribute("class", "border") //cambia el valor de la class a border
// let currentClasses = h2.getAttribute("class")
// h2.setAttribute("class", `${currentClasses} purple`) //aca "creamos/modificamos" class y agregamos 2 valores

//.classList
h2.classList //pasar en consola

h2.classList.add("purple")
h2.classList.add("border") //no solapa.. sino que hace una especie de push con la matriz (añade al final)
h2.classList.remove("border") //elimina el valor border de la class
h2.classList.toggle("border") //crea el valor border
h2.classList.toggle("border") //vuelve a eliminar el valor border

//250
const primerNegrita = document.querySelector("b")
//parentElement
primerNegrita.parentElement //pasar en consola.. nos trae el elemento padre de "b"
primerNegrita.parentElement.parentElement //pasar consola.. nos trae el elemento padre del elemento padre de "b", y asi podemos seguir
//Children
const parrrafo = primerNegrita.parentElement //la variable que se guarda es una coleccion HMTL
parrrafo.children //pasar consola.. muestra los elementos hijos
//sibling
const imgCuadrada = document.querySelector(".square")
imgCuadrada.nextElementSibling

//251
const nuevaImg = document.createElement("img")
console.dir(nuevaImg)
nuevaImg.src = "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
//appendChild
document.body.appendChild(nuevaImg) //agregar el elemento al documento
nuevaImg.classList.add("square") //agregar estilo de css

const nuevoH3 = document.createElement("h3")
nuevoH3.innerText = "soy un nuevo h3"
document.body.appendChild(nuevoH3) 
//append
parrrafo.append("SOY TEXTO CREADO DESDE UN APPEND") //agrega el texto al final del elemento
//agregar mas de una cosa
parrrafo.append("texto 1", "texto 2")
//prepend
parrrafo.prepend("TEXTO AL PRINCIPIO DEL PARRAFO CREADO CON PREAPEND ")

//crear un nuevo elemento e insertarlo en el html
const segundaNegrita = document.createElement("b")
segundaNegrita.append("SEGUNDA NEGRITA")
parrrafo.prepend(segundaNegrita)

//.inserAdjacentElement(posicion, elemento)
const nuevoH2 = document.createElement("h2") //creamos nuevo elemento
nuevoH2.append("soy un nuevo h2 desde JS")
h1.insertAdjacentElement("afterend", nuevoH2)

//.after
const nuevonuevoh3 = document.createElement("h3")
nuevonuevoh3.innerText = "nuevo nuevo h3"
h1.after(nuevonuevoh3)
//.before
h1.before(nuevonuevoh3) //cambiamos el h3 desde despues del h1.. a antes del h1

//252
//removeChild
const primerLi = document.querySelector("li")
const ul = primerLi.parentElement //para saber cual es el elemento padre
ul.removeChild(primerLi)


// remove
const imagenborrar = document.querySelector("img")
// imagenborrar.remove()
imagenborrar.parentElement.removeChild(imagenborrar) //podemos seleecionar el padre de esta forma tambien