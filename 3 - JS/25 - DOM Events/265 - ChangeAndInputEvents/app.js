// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// // })

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value;
// })


// Ejercicio 61
    const input = document.querySelector("input");
    const titulo = document.querySelector("h1");

    input.addEventListener("input", function (e) {
        if (input.value === ""){
        titulo.innerText = `Enter Your Username`
    } else {
        titulo.innerText = `Welcome, ${input.value}`
    }
    })

    input.addEventListener("change", function (e) {
    titulo.innerText = "Enter Your Username"
    input.value = ""
    })

