function payingModalTransfer(){
    return `
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
                    <input id="acount-name" type="text" class="form-control" placeholder="Nombre del titular de la cuenta" required>
                    <div class="invalid-feedback">
                        Ingrese nombre del titular
                    </div>
                </div>
                <div class="form-group">
                    <input id="acount-number" type="text" class="form-control" placeholder="Número de cuenta" required>
                    <div class="invalid-feedback">
                        Ingrese número de cuenta
                    </div>
                </div>
            </div>
        `;
}


function payingModalCard(){
    return `
            <div class="form-group">
                    <input id="credit-card-num" type="text" class="form-control"  placeholder="N° de Tarjeta" required>
                    <div class="invalid-feedback">
                        Ingrese número de tarjeta
                    </div>
                </div>
                <div class="form-group">
                    <input id="card-name" type="text" class="form-control"  placeholder="Nombre del titular" required>
                    <div class="invalid-feedback">
                        Ingrese nombre del titular
                    </div>
                </div>
                <div class="form-group">
                    <input id="card-exp" type="text" pattern="[0-9]{2}/[0-9]{2}" class="form-control" placeholder="Vencimiento (MM/YY)" required>
                    <div class="invalid-feedback">
                        Ingrese fecha de vencimiento
                    </div>
                </div>
                <div class="form-group">
                    <input id="card-code" type="password" class="form-control" placeholder="Código" required>
                    <div class="invalid-feedback">
                        Ingrese código de seguridad
                    </div>
                </div>
        `
}

function validatePaymentSuccess(){
    return `<br>
            <div class="alert alert-success alert-dismissible show" role="alert">
                <strong>Datos de pago válidos</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    `;
}

function invalidPayment(){
    return `<br>
            <div class="alert alert-danger alert-dismissible show" role="alert">
                <strong>Datos de pago inválidos</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    `;
}

function validateBuyForm(){
    return `<br>
            <div class="alert alert-success alert-dismissible show" role="alert">
                <strong>Compra realizada</strong>
                <hr>
                <p>¡Su compra ha sido realizada con éxito!</p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="redirection()">
                    <span aria-hidden="true">&times;</span>
                </button>
    `
}