function cartContentHTML(newPrice, actualCurrency, productsCart, sub, i){
    return `<tr>
                        <th scope="row"><img src="${productsCart.src}" alt="Imagen del producto" width="30px"></th>
                        
                        <td>${productsCart.name}</td>
                        
                        <td>${newPrice + " " + actualCurrency}</td>
                        
                        <td><input id="amount${i}" type="number" value=${productsCart.count} min="1" style="width:4em;" onchange="calcSubtotal(${newPrice}, ${i})"></td>
                        
                        <td> <span class="subtotal" id="productsSubtotal${i}">${sub + " " + actualCurrency}</span> </td>
                        
                        <td> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="fas fa-trash"></span></button> </td>
                    </tr>`
}