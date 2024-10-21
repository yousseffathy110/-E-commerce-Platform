const products = require('../data/products');
const prompt = require('prompt-sync')({ sigint: true });

function addProduct() {
  console.log("\n--- Add New Product ---");

  let id;
  let existingProduct;

  // Loop until a unique product ID is entered
  do {
    id = parseInt(prompt("Enter Product ID: "), 10);
    existingProduct = products.find(product => product.id === id);

    if (existingProduct) {
      console.log(`Error: Product with ID ${id} already exists. Please enter a different ID.`);
    }
  } while (existingProduct); // Keep prompting if the ID already exists

  // Proceed to ask for other product details
  const name = prompt("Enter Product Name: ");
  const description = prompt("Enter Product Description: ");
  const price = parseFloat(prompt("Enter Product Price: "));
  const stock = parseInt(prompt("Enter Product Stock: "), 10);

  // Create a new product object
  const newProduct = {
    id,
    name,
    description,
    price,
    stock
  };

  // Add the new product to the products array
  products.push(newProduct);
  console.log(`Product "${name}" added successfully!`);
}
function updateProduct() {
  const id = parseInt(prompt("Enter Product ID to update: "), 10);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
      console.log(`Error: Product with ID ${id} does not exist.`);
      return;
  }

  console.log(`Updating product with ID ${id}:`);
  
  const updatedName = prompt(`Enter new name (current: ${products[index].name}): `);
  const updatedDescription = prompt(`Enter new description (current: ${products[index].description}): `);
  const updatedPrice = parseFloat(prompt(`Enter new price (current: ${products[index].price}): `));
  const updatedStock = parseInt(prompt(`Enter new stock (current: ${products[index].stock}): `));

  // Update product with new values or keep current if empty
  products[index] = {
      id,
      name: updatedName || products[index].name,
      description: updatedDescription || products[index].description,
      price: isNaN(updatedPrice) ? products[index].price : updatedPrice,
      stock: isNaN(updatedStock) ? products[index].stock : updatedStock
  };

  console.log(`Product with ID ${id} updated successfully!`);
}

function deleteProduct() {
  const id = parseInt(prompt("Enter Product ID to delete: "), 10);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
      console.log(`Error: Product with ID ${id} does not exist.`);
      return;
  }

  // Confirm deletion
  const confirm = prompt(`Are you sure you want to delete the product with ID ${id}? (yes/no): `);
  if (confirm.toLowerCase() === 'yes') {
      products.splice(index, 1);
      console.log(`Product with ID ${id} deleted successfully!`);
  } else {
      console.log(`Deletion of product with ID ${id} canceled.`);
  }
}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
};
