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

/* --- FUNCIÓN LOAD PRODUCT INFO HTML --- */
function productDetails(){
    window.location = "product-info.html";
}
/* --- FIN FUNCIÓN LOAD PRODUCT INFO HTML --- */

/* --- FUNCIÓN MAQUETA PRODUCTOS --- */
function showProducts(array) {
    let contenido = "";

    for (let i = 0 ; i < array.length ; i++){
        let productList = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(productList.cost) >= minPrice)) && ((maxPrice == undefined) || (maxPrice != undefined && parseInt(productList.cost) <= maxPrice))) {
            
            contenido += productShown(productList, i);
        }    
        
        document.getElementById("product-list").innerHTML = contenido;
    }
    changeImg();
}
/* --- FIN FUNCIÓN MOSTRAR PRODUCTOS --- */


/* --- FUNCIÓN TRAER DESDE JSON --- */
$(document).ready(function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            showProducts(productArray);
        }
    })
});
/* --- FIN FUNCIÓN TRAER DESDE JSON --- */


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