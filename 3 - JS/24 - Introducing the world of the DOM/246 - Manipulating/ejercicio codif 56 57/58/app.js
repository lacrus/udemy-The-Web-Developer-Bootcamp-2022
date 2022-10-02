//ejercicio 58
for (let i = 1; i <= 100; i++) {
const botones = document.createElement("button")
botones.innerText = "Hola"

const elDiv = document.getElementById("container")
elDiv.appendChild(botones)
}
