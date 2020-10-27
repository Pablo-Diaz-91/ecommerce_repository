function productShown(productList, i){
    return `
            <div class="product-content">
                <h3 id=${i}>${productList.name}</h3>
                    <div class="product-img-description">
                        <img class="product-img" src=${productList.imgSrc} alt="Productos">
                        <p class="description"> Descripción: ${productList.description}</p>
                        
                    </div>
                <p class="price"><strong> Precio: </strong>${productList.currency}  ${productList.cost}</p>
                <p class="soldCount">Cantidad vendidos: ${productList.soldCount}</p>
                <button class="productDetails" onclick="productDetails()">Ver producto</button>
            </div>
            `;
}