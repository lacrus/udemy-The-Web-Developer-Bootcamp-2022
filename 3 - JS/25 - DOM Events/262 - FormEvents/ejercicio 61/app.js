// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const listaCompras = document.querySelector("#list")


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const producto = form.elements.product.value
    const cantidad = form.elements.qty.value

    const nuevaCompra = document.createElement('li');
    // const nuevoItem = `${cantidad} ${producto}`
    nuevaCompra.innerText = `${cantidad} ${producto}`
    listaCompras.appendChild(nuevaCompra)

    form.elements.product.value = ""
    form.elements.qty.value = ""
})
