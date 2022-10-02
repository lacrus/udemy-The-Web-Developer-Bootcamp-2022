const multiplicacion = (x, y) => x * y;

const cuadrado = x => multiplicacion(x, x)

const esUnTriangulo = (a, b, c) =>(
    cuadrado(a) + cuadrado(b) === cuadrado(c)
)

console.log("antes")

esUnTriangulo(4,5,6)

console.log("despues")