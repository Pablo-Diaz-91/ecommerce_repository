const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const CART_CHALLENGE = "https://japdevdep.github.io/ecommerce-api/cart/654.json"

/*
const CATEGORIES_URL = "http://localhost:3000/categories";
const PUBLISH_PRODUCT_URL = "https://localhost:3000/publish_product";
const CATEGORY_INFO_URL = "https://localhost:3000/category_info";
const PRODUCTS_URL = "https://localhost:3000/products";
const PRODUCT_INFO_URL = "https://localhost:3000/product_info";
const PRODUCT_INFO_COMMENTS_URL = "https://localhost:3000/product_info_comments";
const CART_INFO_URL = "https://localhost:3000/cart_info";
const CART_BUY_URL = "https://localhost:3000/cart_buy";
const CART_CHALLENGE = "https://localhost:3000/cart_challenge";
*/

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//Función que guarda el usuario loggeado
$(document).ready(function(e){
  let userLogged = localStorage.getItem('user-logged');
  let userInfo = document.getElementById('user-info');
  let user = document.getElementById('user');

  if (userLogged) {
    userLogged = JSON.parse(userLogged);
    user.innerText += userLogged.email;
    userInfo.style = 'display: flex';
  }

  document.getElementById('log-out').addEventListener('click', function(){
    localStorage.removeItem('user-logged');
    window.location = 'index.html'
  })
});