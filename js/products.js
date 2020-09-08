//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


/* --- VARIABLES GLOBALES --- */
const ORDER_ASC_BY_PRICE = 'cost -> COST';
const ORDER_DESC_BY_PRICE = 'COST -> cost';
const ORDER_BY_RELEVANCE = 'REL -> rel';

let productArray = [];

var minPrice = undefined;
var maxPrice = undefined;
/* --- FIN VARIABLES GLOBALES --- */


/* --- FUNCIÓN SORT --- */
function sortProducts(criterio, array) {
    let result = [];

    if (criterio === ORDER_ASC_BY_PRICE){
        result = array.sort(function (a, b){
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });

    } else if (criterio === ORDER_DESC_BY_PRICE) {
        result = array.sort(function (a, b){
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criterio === ORDER_BY_RELEVANCE) {
        result = array.sort(function (a, b){
            if (a.soldCount > b.soldCount) { return -1; }
            if (a.soldCount < b.soldCount) { return 1; }
            return 0;
        })
    }
    return result;
}
/* --- FIN FUNCIÓN SORT --- */


/* --- EJECUCIONES DEL SORT ---*/
document.getElementById('price-asc').addEventListener('click', function(){
    productArray = sortProducts(ORDER_ASC_BY_PRICE, productArray);
    showProducts(productArray);
});

document.getElementById('price-desc').addEventListener('click', function (){
    productArray = sortProducts(ORDER_DESC_BY_PRICE, productArray);
    showProducts(productArray);
});

document.getElementById('relevancia').addEventListener('click', function(){
    productArray = sortProducts(ORDER_BY_RELEVANCE, productArray);
    showProducts(productArray);
});
/* --- FIN DE LAS EJECUCIONES SORT ---*/


/* --- FUNCIÓN SLIDES --- */
let c = 0;
let time = 2500;

function changeImg() {
    let reference = document.getElementById("reference-img");
    let slideTitle = document.getElementById("slide-title");

    slideTitle.innerHTML = productArray[c].name;
    document.slide.src = productArray[c].imgSrc;
    reference.href = "#" + c;

    c++;

    if (c > productArray.length - 1) {
        c = 0;
    }

    setTimeout(changeImg, time);
}
/* --- FIN FUNCIÓN SLIDES --- */


/* --- FUNCIÓN MAQUETA PRODUCTOS --- */
function showProducts(array) {
    let contenido = "";

    for (let i = 0 ; i < array.length ; i++){
        let productList = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(productList.cost) >= minPrice)) && ((maxPrice == undefined) || (maxPrice != undefined && parseInt(productList.cost) <= maxPrice))) {
            
            contenido += `
            <div class="product-content">
                <h3 id=`+ i + `>` + productList.name + `</h3>
                    <div class="product-img-description">
                        <img class="product-img" src=`+ productList.imgSrc + ` alt="Productos">
                        <p class="description">Descripción: `+ productList.description + `</p>
                    </div>
                <p class="price"><strong>Precio: </strong>`+ productList.currency + ` ` + productList.cost + `</p>
                <button class="productDetails" onclick="productDetails("")>Ver producto</button>
            </div>
            `
        }    
        
        document.getElementById("product-list").innerHTML = contenido;
    }
    changeImg();
}
/* --- FIN FUNCIÓN MOSTRAR PRODUCTOS --- */


/* --- FUNCIÓN PRODUCTOS DESDE JSON --- */
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            showProducts(productArray);
        }
    })
});
/* --- FIN FUNCIÓN PRODUCTOS DESDE JSON --- */


/* --- FUNCIÓN FILTRAR --- */
document.getElementById('filtrar').addEventListener('click', function(){
    minPrice = document.getElementById('min').value;
    maxPrice = document.getElementById('max').value;

    if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice) >=0)){
        minPrice = parseInt(minPrice);
    } else {
        minPrice = undefined;
    }

    if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice) >= 0)){
        maxPrice = parseInt(maxPrice);
    } else {
        maxPrice = undefined;
    }

    showProducts(productArray);
});
/* --- FIN FUNCIÓN FILTRAR --- */


/* --- FUNCIÓN LIMPIAR --- */
document.getElementById('limpiar').addEventListener('click', function(){
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';

    minPrice = undefined;
    maxPrice = undefined;

    showProducts(productArray);
});
/* --- FIN FUNCIÓN LIMPIAR --- */