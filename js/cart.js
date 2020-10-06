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
    document.getElementById(`productsSubtotal${i}`).innerHTML = subtotal;
    calcTotal();
}

function showCartContent(array) {
    let content = "";
    
    for(let i = 0; i < array.length; i++) {
        let productsCart = array[i];
        let sub = productsCart.unitCost * productsCart.count;

        content += `
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"> # </th>
                        <th scope="col"> Producto </th> 
                        <th scope="col"> Precio por unidad </th> 
                        <th scope="col"> Cantidad </th>
                        <th scope="col"> Subtotal </th> 
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row"><img src="${productsCart.src}" alt="Imagen del producto" width="30px"></th>
                        
                        <td>${productsCart.name}</td>
                        
                        <td>${productsCart.unitCost + " " +productsCart.currency}</td>
                        
                        <td><input id="amount${i}" type="number" value=${productsCart.count} min="1" style="width:4em;" onchange="calcSubtotal(${productsCart.unitCost}, ${i})"></td>
                        
                        <td> <span class="subtotal" id="productsSubtotal${i}">${sub + " " + productsCart.currency}</span> </td>
                        
                        <td> <button>&times</button> </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="4">Total</th>
                        <td id="total"> </td>
                    </tr>
                </tfoot>
            </table>
        `

        document.getElementById("cart-table").innerHTML = content;
    }
    calcTotal();
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cartContent = resultObj.data;
            showCartContent(cartContent.articles);
        }
    })
});