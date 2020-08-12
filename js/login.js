//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("btn-sign-in").addEventListener("click", function (e) {

        let inputEmail = document.getElementById("email");
        let inputPassword = document.getElementById("password");
        let camposCompletos = true;

        if (inputEmail.value === '' || inputPassword.value === '') {
            camposCompletos = false;
            alert('Por favor complete los campos');
        }

        if (camposCompletos) {
            window.location = 'cover.html';
        }
    });
});