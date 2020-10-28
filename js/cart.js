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
    document.getElementById("total").innerHTML = total + " " + currencyChanges();
    calcTotalDeliv();
}

function calcSubtotal(price, i) {
    //Función que calcula el subtotal en base a la cantidad de producto y el precio unitario
    let amount = parseInt(document.getElementById(`amount${i}`).value);
    subtotal = amount * price;
    document.getElementById(`productsSubtotal${i}`).innerHTML = subtotal + " " + currencyChanges();
    calcTotal();
}

function currencyChanges(){
    let newCurrency;
    let currency = document.getElementsByName('currency');
    for (let i = 0 ; i < currency.length ; i++){
        if (currency[i].checked) {
            return newCurrency = currency[i].value;
        }
    }
}

function showCartContent(array) {
    let content = "";
    
    for(let i = 0; i < array.length; i++) {
        let productsCart = array[i];
        /*----conversion de moneda en base a currency dado----*/
            let newCurrency = currencyChanges();
            let newPrice;
            let actualCurrency;

        if (newCurrency == "UYU"){
            if (productsCart.currency == "USD"){
                newPrice = productsCart.unitCost * 40;
                actualCurrency = "UYU";
            } else {
                newPrice = productsCart.unitCost;
                actualCurrency = productsCart.currency;
            }
        } else if (newCurrency == "USD"){
            if (productsCart.currency == "UYU"){
                newPrice = productsCart.unitCost / 40;
                actualCurrency = "USD";
            } else {
                newPrice = productsCart.unitCost;
                actualCurrency = productsCart.currency;
            }
        }
        /*--------------------*/

        let sub = newPrice * productsCart.count;

        content += cartContentHTML(newPrice, actualCurrency, productsCart, sub, i);
        //ver función en js/Templates/cart-template

        document.getElementById("cart-table").innerHTML = content;
    }
    calcTotal();
}

let currencyRadios = document.getElementsByName('currency');
for (let i = 0 ; i < currencyRadios.length ; i++){
    currencyRadios[i].addEventListener('change', function(){
        showCartContent(cartContent.articles);
    });
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
        <h4>${totalWDelivery + " " + currencyChanges()}</h4>
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

function validatePayment(){
    //Función que chequea los campos del modal
    //method
    let payMethod = document.getElementById('pay-method').value;
    //boolean
    let validPayment = true;

    if (payMethod == "credit-card"){
        //Validación para tarjeta de crédito
        let creditCard = document.getElementById('credit-card-num').value;
        let cardName = document.getElementById('card-name').value;
        let cardExp = document.getElementById('card-exp').value;
        let cardCode = document.getElementById('card-code').value;

        if (creditCard == "" || cardName == "" || cardExp == "" || cardCode == ""){
            validPayment = false;
        } else {
            validPayment = true;
        }

    } else if (payMethod == "transfer"){
        //Validación para transferencia
        let acountName = document.getElementById('acount-name').value;
        let acountNumber = document.getElementById('acount-number').value;
        
        if (acountName == "" || acountNumber == ""){
            validPayment = false;
        } else {
            validPayment = true;
        }
    }
    return validPayment;
};

$(document).ready(function (e) {
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
        containerPayMethod.innerHTML = payingModalTransfer();

    } else if (payingMethod == 'credit-card'){
        containerPayMethod.innerHTML = payingModalCard();
    }

});



(function () {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    if(validatePayment()){
                        //Cambios de estilo cuando es válido
                        document.getElementById('modal-button').classList.remove("btn-primary");
                        document.getElementById('modal-button').classList.remove("btn-danger");
                        document.getElementById('modal-button').classList.add("btn-success");
                        document.getElementById("check-modal").innerHTML = validatePaymentSuccess();
                    } else {
                        event.preventDefault();
                        event.stopPropagation();
                        //Cambios de estilo cuando es inválido
                        document.getElementById('modal-button').classList.remove("btn-primary");
                        document.getElementById('modal-button').classList.remove("btn-success");
                        document.getElementById('modal-button').classList.add("btn-danger");
                        document.getElementById("check-modal").innerHTML = invalidPayment();
                    }
                } else {
                    //Si checkValidity es true
                    if (validatePayment()){
                        //Si ambas validaciones son correctas se muestra una alerta de confirmación
                        document.getElementById('modal-button').classList.remove("btn-primary");
                        document.getElementById('modal-button').classList.remove("btn-danger");
                        document.getElementById('modal-button').classList.add("btn-success");
                        document.getElementById("cart-container").innerHTML = validateBuyForm();
                    } else {
                        event.preventDefault();
                        event.stopPropagation();
                        //Si el checkValidity es true pero el validatePayment es false se muestra una alerta que pide ingresar métodos de pago y se cambia la clase del botón de modal
                        document.getElementById('modal-button').classList.remove("btn-primary");
                        document.getElementById('modal-button').classList.remove("btn-success");
                        document.getElementById('modal-button').classList.add("btn-danger");
                        document.getElementById("check-modal").innerHTML = invalidPayment();
                    }

                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function redirection(){
    window.location = "cover.html";
}