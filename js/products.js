//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let productArray = [];

function showProducts(arry) {
    let contenido = "";
    for (let i = 0 ; i < arry.length ; i++){
        let productList = array[i];

        contenido += `
        <div class="product-container">
            <h3>`+ productList.name +`</h3>
            <p>`+ productList.description +`</p>
            <p>` + productList.cost +`</p>
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