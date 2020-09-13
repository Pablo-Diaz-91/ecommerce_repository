//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
productObject = {};
commentArray = [];

function showProductDetails(products, comments) {
    let commentsDisplay = '';
    let productDetails = '';
    
    productDetails += `
                        <h3>${products.name}</h3>
                        <div class="description">
                            <p>Descripción: ${products.description}</p>
                            <p><strong>Precio: ${products.currency} ${products.cost}</strong></p>
                        </div>
                        <div class="images">
                        <img src="${products.images[0]}" alt="Imagen del producto">
                        <img src="${products.images[1]}"
                        alt="Imagen del producto">
                        <img src="${products.images[2]}"
                        alt="Imagen del producto">
                        <img src="${products.images[3]}"
                        alt="Imagen del producto">
                        <img src="${products.images[4]}"
                        alt="Imagen del producto">
                        </div>
                        `;
    
    comments.forEach(function (comment) {
        let score = '';
                        
        commentsDisplay += `
                            <h5>${comment.user}</h5>
                            <small>${comment.dateTime}</small>
                            <p>${comment.description}</p>
                        `;

                    for (let i = 1 ; i <= comment.score ; i++) {
                        score += `<span class="fa fa-star checked"></span>`; 
                    }

                    for (let i = comment.score + 1 ; i <= 5 ; i++) {
                        score += `<span class="fa fa-star"></span>`;
                    }

                    commentsDisplay += `<div id="score-com">${score}</div><hr>`;
                });

    document.getElementById("details-container").innerHTML = productDetails;
    document.getElementById("comments").innerHTML = commentsDisplay;
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productObject = resultObj.data;
        }
    });
});

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commentArray = resultObj.data;

            showProductDetails(productObject, commentArray);
        }
    })
})