//243
document.getElementById("banner") //pasar en la consola
const banner = document.getElementById("banner")

//244
const allImages = document.getElementsByTagName('img');
allImages[0] //podemos acceder a las imagenes individualmente

// hacemos que todas la imagenes sean la misma
// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

 
const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}


//245
document.querySelector("p") //selecciona el primer p que encuentra
document.querySelector("img:nth-of-type(2)"); //seleccionamos el segundo elemento img
document.querySelector("a[title='Java']") //seleccionamos por atribute selector

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href)
} 