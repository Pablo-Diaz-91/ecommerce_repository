//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let productArray = [];

function showProducts(array) {
    let contenido = "";
    for (let i = 0 ; i < array.length ; i++){
        let productList = array[i];

        contenido += `
        <div class="product-container">
            <img src=`+ productList.imgSrc +`>
            <h3>`+ productList.name +`</h3>
            <p>Descripción: `+ productList.description +`</p>
            <p>Precio: `+ productList.currency +` `+ productList.cost +`</p>
        `
        document.getElementById("product-list").innerHTML = contenido;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            showProducts(productArray);
        }
    })
});