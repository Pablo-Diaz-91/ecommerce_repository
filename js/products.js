//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let productArray = [];

/*SLIDES*/
let c = 0;
let time = 2500;

function changeImg(){
    let reference = document.getElementById("reference-img");
    let slideTitle = document.getElementById("slide-title");

    slideTitle.innerHTML = productArray[c].name;
    document.slide.src = productArray[c].imgSrc;
    reference.href = "#" + c;
    
    c++;

    if (c > productArray.length - 1) {
        c=0;
    }

    setTimeout(changeImg, time);

}


/*PRODUCTOS*/

function showProducts(array) {
    let contenido = "";

    for (let i = 0 ; i < array.length ; i++){
        let productList = array[i];
        
        contenido += `
            <div class="product-content">
                <h3 id=`+ i +`>`+ productList.name +`</h3>
                    <div class="product-img-description">
                        <img class="product-img" src=`+ productList.imgSrc +`>
                        <p class="description">Descripción: `+ productList.description +`</p>
                    </div>
                <p class="price"><strong>Precio: </strong>`+ productList.currency +` `+ productList.cost +`</p>
            </div>
            `
        document.getElementById("product-list").innerHTML = contenido;
        
    }
    changeImg();
}



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            showProducts(productArray);
        }
    })
});