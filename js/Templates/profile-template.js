function emptyProfileTemplate(userLogged){
    return `
    <thead class="thead-dark">
        <tr>
            <th>Usuario: </th>
            <th colspan="2"> ${userLogged.email}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nombre: </td>
            <td></td>
            <td><button id="name-modal" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="first-name-modal" id="first-name-modal" placeholder="Nombre" onblur="checkFirstName();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-name">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Apellido: </td>
            <td></td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".last-name">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm last-name" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="last-name-modal" id="last-name-modal" placeholder="Apellido" onblur="checkLastName();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-last-name">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Fecha de Nacimiento: </td>
            <td></td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".birthday">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm birthday" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="birthday-modal" id="birthday-modal" placeholder="Fecha de Nacimiento" onblur="checkBirthday();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-birthday">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Email: </td>
            <td></td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".email-modal">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm email-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="email-modal" id="email-modal" placeholder="Email" onblur="checkEmail();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-email">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Teléfono: </td>
            <td></td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".phone-modal">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm phone-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="phone-modal" id="phone-modal" placeholder="Teléfono" onblur="checkPhoneNumber();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-phone">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
    </tbody>
    `
}


function profileTemplate(profile, userLogged){
    return `
    <thead class="thead-dark">
        <tr>
            <th>Usuario: </th>
            <th colspan="2"> ${userLogged.email}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nombre: </td>
            <td> ${profile.name} </td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="first-name-modal" id="first-name-modal" placeholder="Nombre" onblur="checkFirstName();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-name">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Apellido: </td>
            <td> ${profile.lastName} </td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".last-name">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm last-name" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="last-name-modal" id="last-name-modal" placeholder="Apellido" onblur="checkLastName();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-last-name">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Fecha de Nacimiento: </td>
            <td> ${profile.birthday} </td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".birthday">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm birthday" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="birthday-modal" id="birthday-modal" placeholder="Fecha de Nacimiento" onblur="checkBirthday();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-birthday">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Email: </td>
            <td> ${profile.email} </td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".email-modal">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm email-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="email-modal" id="email-modal" placeholder="Email" onblur="checkEmail();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-email">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
        <tr>
            <td>Teléfono: </td>
            <td> ${profile.phone} </td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".phone-modal">Editar campo <i class="fas fa-edit"></i></button>

                <div class="modal fade bd-example-modal-sm phone-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <input class="form-control my-3" type="text" name="phone-modal" id="phone-modal" placeholder="Teléfono" onblur="checkPhoneNumber();">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-phone">Guardar</button>
                        </div>
                    </div>
                </div></td>
        </tr>
    </tbody>
        `
}


function modalComplete(){
    return `<div class="alert alert-success alert-dismissible" role="alert" id="modal-message">
                <strong>Perfil actualizado</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
    `;
}

function modalIncomplete(){
    return `<div class="alert alert-danger alert-dismissible" role="alert" id="modal-message">
                <strong>Debes completar todos los campos del modal</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
    `;
}