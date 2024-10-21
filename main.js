// main.js
const prompt = require('prompt-sync')({ sigint: true });
const { listProducts, viewProductDetails } = require('./controllers/productController');
const { addToCart, removeFromCart, displayCart } = require('./controllers/cartController');
const { checkout } = require('./controllers/orderController');
const User = require('./classes/User');
const { adminLogin, logout } = require('./controllers/userController'); // Import admin functions
const { addProduct } = require('./controllers/adminController');

// Example interactive session
console.log("Welcome to the eCommerce platform!\n");

let action;
let isAdminLoggedIn = true; // true for development purposes

do {
  // Display main menu options
  console.log("\n1. Admin Login");
  console.log("2. Add Product"); // New option for adding a product
  console.log("3. List Products");
  console.log("4. View Product Details");
  console.log("5. Add Product to Cart");
  console.log("6. Remove Product from Cart");
  console.log("7. View Cart");
  console.log("8. Checkout");
  console.log("9. Logout");
  console.log("10. Exit");

  action = prompt("Choose an option: ");

  switch (action) {
      case '1':
          // Admin login
          if (!isAdminLoggedIn) {
              isAdminLoggedIn = adminLogin(); // Call admin login function
          } else {
              console.log("Admin already logged in.");
          }
          break;

      case '2':
          // Add product (only if admin is logged in)
          if (isAdminLoggedIn) {

              // Call addProduct function
              addProduct();
 
          } else {
              console.log("You need to be logged in as admin to add a product.");
          }
          break;

      case '3':
          // List all products
          console.log("\nListing all products:");
          listProducts();
          break;

      case '4':
          // View product details
          const productId = parseInt(prompt("Enter Product ID: "), 10);
          console.log(`\nViewing details of product with ID ${productId}:`);
          viewProductDetails(productId);
          break;

      case '5':
          // Add product to cart
          const addId = parseInt(prompt("Enter Product ID to add to cart: "), 10);
          console.log(`\nAdding product with ID ${addId} to cart:`);
          addToCart(addId);
          break;

      case '6':
          // Remove product from cart
          const removeId = parseInt(prompt("Enter Product ID to remove from cart: "), 10);
          console.log(`\nRemoving product with ID ${removeId} from cart:`);
          removeFromCart(removeId);
          break;

      case '7':
          // View cart
          console.log("\nDisplaying cart:");
          displayCart();
          break;

      case '8':
          // Checkout
          const name = prompt("Enter your name: ");
          const email = prompt("Enter your email: ");
          const user = new User(Date.now(), name, email);
          console.log("\nProceeding to checkout:");
          checkout(user);
          break;

      case '9':
          // Logout
          if (isAdminLoggedIn) {
              logout(); // Call logout function
              isAdminLoggedIn = false; // Update admin login status
          } else {
              console.log("No admin is currently logged in.");
          }
          break;

      case '10':
          console.log("\nExiting the platform. Thank you!");
          break;

      default:
          console.log("\nInvalid option. Please try again.");
          break;
  }

} while (action !== '10');