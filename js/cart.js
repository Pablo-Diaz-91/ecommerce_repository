//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let cartContent = [];

function calcTotal(){
    let total = 0;
    let sub = document.getElementsByClassName("subtotal");
    for (let i = 0; i < sub.length; i++){
        total += parseInt(sub[i].innerHTML);
    }
    document.getElementById("total").innerHTML = total + " UYU";
}

function calcSubtotal(price, i) {
    let amount = parseInt(document.getElementById(`amount${i}`).value);
    subtotal = amount * price;
    document.getElementById(`productsSubtotal${i}`).innerHTML = subtotal + " UYU";
    calcTotal();
}

function showCartContent(array) {
    let content = "";
    
    for(let i = 0; i < array.length; i++) {
        let productsCart = array[i];
        let sub = productsCart.unitCost * productsCart.count;

        content += `
            
                    <tr>
                        <th scope="row"><img src="${productsCart.src}" alt="Imagen del producto" width="30px"></th>
                        
                        <td>${productsCart.name}</td>
                        
                        <td>${productsCart.unitCost + " " +productsCart.currency}</td>
                        
                        <td><input id="amount${i}" type="number" value=${productsCart.count} min="1" style="width:4em;" onchange="calcSubtotal(${productsCart.unitCost}, ${i})"></td>
                        
                        <td> <span class="subtotal" id="productsSubtotal${i}">${sub + " " + productsCart.currency}</span> </td>
                        
                        <td> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="fas fa-trash"></span></button> </td>
                    </tr>
                
        `

        document.getElementById("cart-table").innerHTML = content;
    }
    calcTotal();
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_CHALLENGE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cartContent = resultObj.data;
            showCartContent(cartContent.articles);
        }
    })
});