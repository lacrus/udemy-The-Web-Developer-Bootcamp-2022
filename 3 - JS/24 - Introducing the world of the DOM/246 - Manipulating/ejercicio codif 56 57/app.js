const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const losDivs = document.querySelectorAll("span")

for (let letras of losDivs) {
    for (let i = 0; i <= 6; i++) {
        losDivs[i].style.color = `${colors[i]}`
    }
}


const losLi = document.querySelectorAll("li")

for (let cambioCoor of losLi) { 
    for (let i = 0; i <=6; i++){
        losLi[i].classList.toggle("highlight")
    }
}


//ejercicio 58
const botones = document.createElement("button")
// botones.innerText = "Hola"

const elDiv = document.querySelectorAll("div")
elDiv.style.color = 'rgb(0, 108, 134)'
// div.insertAdjacentElement("afterend", botones)



