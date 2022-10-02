const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    //form.ele.... es la forma de obtener el valor de lo que se escribio en el input (que tiene name=query)
    const searchTerm = form.elements.query.value;
    //en configuracion tambien podemos pasar los parametros de pares clave valor para pasar por la URL
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}