function productDetailsTemp(products){
    return `
            <h3>${products.name}</h3>
            <div>
                <p>Descripción: ${products.description}</p>
                <p class="detailsPrice"><strong>Precio: ${products.currency} ${products.cost}</strong></p>
            </div>
            `;
}

function relatedProducts(products, i){
    return `    <div class="col-lg-6 col-12">
                        <a href="#">
                            <div class="row border">
                                <div class="col-lg-6 col-12">
                                    <img class="imgRelated" src="${products[i].imgSrc}">
                                </div>
                                <div class="col-lg-6 col-12 relatedDescript">
                                    <h4>${products[i].name}</h4>
                                    <p>${products[i].description}</p>
                                    <p>Precio: ${products[i].currency} ${products[i].cost}</p>
                                    <p>Cantidad vendidos: ${products[i].soldCount}</p>
                                </div>
                            </div>
                        </a>
                </div>
                `;
}