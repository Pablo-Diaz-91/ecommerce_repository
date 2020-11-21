
const categories = require('./json/categories.json');
const publish_product = require('./json/publish_product.json');
const category_info = require('./json/category_info.json');
const products = require('./json/products.json');
const product_info = require('./json/product_info.json');
const product_info_comments = require('./json/product_info_comments.json');
const cart_info = require('./json/cart_info.json');
const cart_buy = require('./json/cart_buy.json');
const cart_challenge = require('./json/cart_challenge.json');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});


//gets
app.get('/', (req, res) => {
    res.send('Prueba de servidor');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/publish_product', (req, res) => {
    res.send(publish_product);
})

app.get('/category_info', (req, res) => {
    res.send(category_info);
})

app.get('/products', (req, res) => {
    res.send(products);
})

app.get('/product_info', (req, res) => {
    res.send(product_info);
})

app.get('/product_info_comments', (req, res) => {
    res.send(product_info_comments);
});

app.get('/cart_info', (req, res) => {
    res.send(cart_info);
});

app.get('/cart_buy', (req, res) => {
    res.send(cart_buy);
});

app.get('/cart_challenge', (req, res) => {
    res.send(cart_challenge);
});


app.listen(port, () => {
    console.log('Escuchando al localhost en http://localhost:' + port);
});