// controllers/productController.js
const products = require('../data/products');

function listProducts() {
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
}

function viewProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        console.log(product.getDetails());
    } else {
        console.log(`Product with ID ${id} not found.`);
    }
}

module.exports = { listProducts, viewProductDetails };
