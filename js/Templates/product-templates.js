function productShown(productList, i){
    return `
            <div class="col-xl-4 col-md-6 mb-3">
                <div class="card product-content">
                    
                        <img style="width:100%" class="card-img-top border-bottom" src=${productList.imgSrc} alt="Productos">
                    
                    <div class="card-body d-flex flex-column">
                        
                            <h3 class="card-title text-center" id=${i}>${productList.name}</h3>
                        
                        
                            <p class="card-text"> Descripción: ${productList.description}</p>
                        
                        <div class="justify-content-center mt-auto">
                        
                            <p class="price"><strong> Precio: </strong>${productList.currency}  ${productList.cost}</p>
                        
                        
                            <p class="soldCount">Cantidad vendidos: ${productList.soldCount}</p>
                        
                            <button class="btn-block productDetails" onclick="productDetails()">Ver producto</button>

                        </div>

                    </div>
                </div>
            </div>

            `;
}