//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let cartContent = [];

function calcTotal(){
    //Función que calcula el total en base a los valores traidos del innerHTML donde se encuentran los valores del subtotal
    let total = 0;
    let sub = document.getElementsByClassName("subtotal");
    for (let i = 0; i < sub.length; i++){
        //Suman al total cada uno de los valores dentro del elemento de nombre subtotal
        total += parseInt(sub[i].innerHTML);
    }
    document.getElementById("total").innerHTML = total + " UYU";
    calcTotalDeliv();
}

function calcSubtotal(price, i) {
    //Función que calcula el subtotal en base a la cantidad de producto y el precio unitario
    let amount = parseInt(document.getElementById(`amount${i}`).value);
    subtotal = amount * price;
    document.getElementById(`productsSubtotal${i}`).innerHTML = subtotal + " UYU";
    calcTotal();
}

function showCartContent(array) {
    let content = "";
    
    for(let i = 0; i < array.length; i++) {
        let productsCart = array[i];

        /*----conversion de moneda en base a currency dado----*/
            let priceOnPesos;
            let currencyOnPesos;

            if (productsCart.currency === "USD"){
                priceOnPesos = productsCart.unitCost * 40;
                currencyOnPesos = "UYU";
            } else {
                priceOnPesos = productsCart.unitCost;
                currencyOnPesos = productsCart.currency;
            }
        /*--------------------*/

        let sub = priceOnPesos * productsCart.count;

        content += `
            
                    <tr>
                        <th scope="row"><img src="${productsCart.src}" alt="Imagen del producto" width="30px"></th>
                        
                        <td>${productsCart.name}</td>
                        
                        <td>${priceOnPesos + " " + currencyOnPesos}</td>
                        
                        <td><input id="amount${i}" type="number" value=${productsCart.count} min="1" style="width:4em;" onchange="calcSubtotal(${priceOnPesos}, ${i})"></td>
                        
                        <td> <span class="subtotal" id="productsSubtotal${i}">${sub + " " + currencyOnPesos}</span> </td>
                        
                        <td> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="fas fa-trash"></span></button> </td>
                    </tr>
                
        `

        document.getElementById("cart-table").innerHTML = content;
    }
    calcTotal();
}

function calcTotalDeliv() {
    //Función que calcula el total con envío haciendo uso del valor total y agregando el valor calculado sobre los values del tipo de envío (15, 7, 5)
    let total = parseInt(document.getElementById('total').innerHTML);
    let delivery;
    let sendType = document.getElementsByName('send-type');

    for (let i = 0 ; i < sendType.length ; i++){
        //Iteramos para encontrar el radio con atributo checked para traer su valor para calcular
        if (sendType[i].checked){
            delivery = parseInt(sendType[i].value);
        }
    }

    totalWDelivery = total + (total * (delivery / 100));

    let content = `
        <h4>${totalWDelivery} UYU</h4>
    `

    document.getElementById('total-delivery').innerHTML = content;
}

let sendTypesRadio = document.getElementsByName('send-type');
for (let i = 0 ; i < sendTypesRadio.length ; i++){
    //Para un valor de radio seleccionado se modifica el cálculo total de la compra con envío
    sendTypesRadio[i].addEventListener('change', function(){
        calcTotalDeliv();
    });
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_CHALLENGE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cartContent = resultObj.data;
            showCartContent(cartContent.articles);
            calcTotalDeliv();
        }
    })
});

document.getElementById('pay-method').addEventListener('change', function(){
    let payingMethod = document.getElementById('pay-method').value;
    let containerPayMethod = document.getElementById('paying-method-container');

    if (payingMethod == 'transfer'){
        containerPayMethod.innerHTML = `
            <div id="transfer-method">
                <div class="form-group">
                    <select class="form-control">
                        <option>BROU</option>
                        <option>BBVA</option>
                        <option>Scotiabanck</option>
                        <option>Santender</option>
                        <option>HSBC</option>
                        <option>BCU</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre del titular de la cuenta" required>
                    <div class="invalid-feedback">
                        Ingrese nombre del titular
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Número de cuenta" required>
                    <div class="invalid-feedback">
                        Ingrese número de cuenta
                    </div>
                </div>
            </div>
        `;
    } else if (payingMethod == 'credit-card'){
        containerPayMethod.innerHTML = `
            <div class="form-group">
                    <input type="text" class="form-control"  placeholder="N° de Tarjeta" required>
                    <div class="invalid-feedback">
                        Ingrese número de tarjeta
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control"  placeholder="Nombre del titular" required>
                    <div class="invalid-feedback">
                        Ingrese nombre del titular
                    </div>
                </div>
                <div class="form-group">
                    <input type="date" class="form-control" placeholder="Vencimiento" required>
                    <div class="invalid-feedback">
                        Ingrese fecha de vencimiento
                    </div>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control"  placeholder="Código" required>
                    <div class="invalid-feedback">
                        Ingrese código de seguridad
                    </div>
                </div>
        `
    }

});