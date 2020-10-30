function productShown(productList, i){
    return `
        <div class="col-md-5">

            <div class="row my-3">
                <div class="product-content my-auto">
                    <div class="col-12 mb-3">
                        <img style="width:100%" class="product-img" src=${productList.imgSrc} alt="Productos">
                    </div>
                    <div class="col-12">
                        <h3 id=${i}>${productList.name}</h3>
                    </div>
                    <div class="col-12">
                        <p class="description"> Descripción: ${productList.description}</p>
                    </div>
                    <div class="col-12">
                        <p class="price"><strong> Precio: </strong>${productList.currency}  ${productList.cost}</p>
                    </div>
                    <div class="col-12">
                        <p class="soldCount">Cantidad vendidos: ${productList.soldCount}</p>
                    </div>
                    <div class="col-12">
                        <button class="btn-block productDetails" onclick="productDetails()">Ver producto</button>
                    </div>
                </div>
            </div>

        </div>

            `;
}