
const {getProducts, getProductById, setProduct, deleteProduct, updateProduct } = require('../controllers/product.controller');

const routes = [
    {
        url: '/products',
        method: "GET",
        handler: getProducts
    },
    {
        url: '/products/:id',
        method: "GET",
        handler: getProductById
    },
    {
        url: '/products',
        method: "POST",
        handler: setProduct
    },
    {
        url: '/products/:id',
        method: "DELETE",
        handler: deleteProduct
    },
    {
        url: '/products/:id',
        method: "PUT",
        handler: updateProduct
    },
    
];


module.exports = routes;