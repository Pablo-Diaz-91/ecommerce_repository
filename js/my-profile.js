//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function checkFirstName(){
    let field = document.getElementById('first-name').value;
    let regex = /^[a-zA-Zá-úÁ-Ú\s]{2,15}$/g;
    let fnMessage = document.getElementById('fn-message');
    
    if (regex.test(field) && field[0] != " "){
        fnMessage.style.display = "inline";
        fnMessage.className = "valid-feedback";
        fnMessage.innerHTML = "Nombre válido";
        return true;
    }
    else {
        fnMessage.style.display = "inline";
        fnMessage.className = "invalid-feedback";
        fnMessage.innerHTML = "El nombre solo acepta letras y espacios y debe contenter entre 2 a 15 caracteres";
        return false;
    }
}

function checkLastName(){
    let field = document.getElementById('last-name').value;
    let regex = /^[a-zA-Zá-úÁ-Ú\s\-']{2,20}$/g;
    let lnMessage = document.getElementById('ln-message');

    if (regex.test(field) && field[0] != " "){
        lnMessage.style.display = "inline";
        lnMessage.className = "valid-feedback";
        lnMessage.innerHTML = "Apellido válido";
        return true;
    }
    else {
        lnMessage.style.display = "inline";
        lnMessage.className = "invalid-feedback";
        lnMessage.innerHTML = "El apellido solo acepta letras y espacios y debe contenter entre 2 a 20 caracteres";
        return false;
    }
}

function checkBirthday(){
    let field = document.getElementById('birthday').value;
    let regex = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/g
    let bdMessage = document.getElementById('bd-message');

    if (regex.test(field) && field[0] != " "){
        bdMessage.style.display = "inline";
        bdMessage.className = "valid-feedback";
        bdMessage.innerHTML = "Fecha de Nacimiento válida";
        return true;
    }
    else {
        bdMessage.style.display = "inline";
        bdMessage.className = "invalid-feedback";
        bdMessage.innerHTML = "Debes elegir una fecha de nacimiento";
        return false;
    }
}


function checkEmail(){
    let field = document.getElementById('email').value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g;
    let emMessage = document.getElementById('em-message');

    if (regex.test(field) && field[0] != " "){
        emMessage.style.display = "inline";
        emMessage.className = "valid-feedback";
        emMessage.innerHTML = "Email válido";
        return true;
    }
    else {
        emMessage.style.display = "inline";
        emMessage.className = "invalid-feedback";
        emMessage.innerHTML = "El email debe contener al menos dos caracteres y tener formato de email (ejemplo@email.com)."
        return false;
    }
}

function checkPhoneNumber(){
    let field = document.getElementById('phone').value;
    let regexLine = /^[0-9]{4}[-\s\./0-9]{4}$/g;
    let regexCell = /^[+]*[(]{0,1}[0-9]{3}[)]{0,1}[-\s\./0-9]*$/g;
    let phMessage = document.getElementById('ph-message');

    if ((regexLine.test(field) || regexCell.test(field)) && field[0] != " "){
        phMessage.style.display = "inline";
        phMessage.className = "valid-feedback";
        phMessage.innerHTML = "Número válido";
        return true;
    }
    else {
        phMessage.style.display = "inline";
        phMessage.className = "invalid-feedback";
        phMessage.innerHTML = "El número de teléfono solo acepta caracteres numéricos."
        return false;
    }
}



function checkInputs(){
    if (checkFirstName() && checkLastName() && checkBirthday() && checkEmail() && checkPhoneNumber()){
        return true;
    }
    return false;
}



document.addEventListener("DOMContentLoaded", function (e) {
    let container = document.getElementById('profile-container');
    let imageContainer = document.getElementById('image-container');
    
    document.getElementById('save-profile').addEventListener('click', function () {
            let name = document.getElementById('first-name');
            let lastName = document.getElementById('last-name');
            let birthday = document.getElementById('birthday');
            let email = document.getElementById('email');
            let phone = document.getElementById('phone');
            let message = document.getElementById('modal-message');

        if (checkInputs()){
            localStorage.setItem('profile', JSON.stringify({
                name: name.value,
                lastName: lastName.value,
                birthday: birthday.value,
                email: email.value,
                phone: phone.value
            }));
            
            message.innerHTML = modalComplete();
            let profile = localStorage.getItem('profile');
            profile = JSON.parse(profile);
            let userLogged = localStorage.getItem('user-logged');
            userLogged = JSON.parse(userLogged);
            container.innerHTML = profileTemplate(profile, userLogged);
        }
        else {
            message.innerHTML = modalIncomplete();
        }
    });

    document.getElementById('image-profile').addEventListener('click', function(){
        
        let image = document.getElementById('image-url');

        localStorage.setItem('profile-image', JSON.stringify({ image: image.value }));

        let profileImage = localStorage.getItem('profile-image');
        profileImage = JSON.parse(profileImage);
        imageContainer.src = profileImage.image;
    })
    
    
    let profile = localStorage.getItem('profile');
    let userLogged = localStorage.getItem('user-logged');
    userLogged = JSON.parse(userLogged);
    let profileImage = localStorage.getItem('profile-image');

    if(userLogged){
        if(profileImage && !profile){
            profileImage = JSON.parse(profileImage);
            imageContainer.src = profileImage.image;
            container.innerHTML = emptyProfileTemplate(userLogged);
        }
        else if (profileImage && profile){
            profileImage = JSON.parse(profileImage);
            imageContainer.src = profileImage.image;
            profile = JSON.parse(profile);
            container.innerHTML = profileTemplate(profile, userLogged);
        }
        else if (!profileImage && profile){
            profile = JSON.parse(profile);
            container.innerHTML = profileTemplate(profile, userLogged);
        }
        else {
            container.innerHTML = emptyProfileTemplate(userLogged);
        }
    }
    else {
        window.location = "index.html";
    }
});