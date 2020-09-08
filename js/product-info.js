//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
productArray = [];
commentArray = [];

function showProductDetails(products, comments) {
    let commentsDisplay = '';
    let productDetails = '';
    
    productDetails += `
                        <h3>${products.name}</h3>
                        <div class="description">
                            <p>Descripción: ${products.description}</p>
                            <p>Precio: ${products.currency} ${products.cost}
                        </div>
                        <div class="images">
                            <img src="img/prod1.jpg" alt="Imagen del producto">
                            <img src="img/prod1_1.jpg"
                            alt="Imagen del producto" >
                            <img src="img/prod1_2.jpg"
                            alt="Imagen del producto" >
                            <img src="img/prod1_3.jpg"
                            alt="Imagen del producto" >
                            <img src="img/prod1_4.jpg"
                            alt="Imagen del producto" >
                        </div>
                    `;
    
    for (let comment in comments) {
        commentsDisplay += `
                            <h5>${comments[comment].user}</h5>
                            <small>${comments[comment].dateTime}</small>
                            <p>Descripción: ${comments[comment].description}</p>
                            <p>Puntuación: ${comments[comment].score}/5</p>
                        `;
                    }


    document.getElementById("details-container").innerHTML = productDetails;
    document.getElementById("comments").innerHTML = commentsDisplay;
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
        }
    });
});

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commentArray = resultObj.data;

            showProductDetails(productArray, commentArray);
        }
    })
})