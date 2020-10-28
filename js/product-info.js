//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
productObject = {};
commentArray = [];
productArray = [];

function showProductDetails(products, comments) {
    let commentsDisplay = '';
    let productDetails = '';
    
    productDetails += productDetailsTemp(products);
    
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


function showRelatedProducts(products, related){
    let content = '';
    related.forEach(function(i){
        content += relatedProducts(products, i);

        document.getElementById('related').innerHTML = content;
    })
}

$(document).ready(function(e){
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productObject = resultObj.data;
        }
    });
});

$(document).ready(function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commentArray = resultObj.data;

            showProductDetails(productObject, commentArray);
        }
    });
});

$(document).ready(function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;

            showRelatedProducts(productArray, productObject.relatedProducts);
        }
    });
});