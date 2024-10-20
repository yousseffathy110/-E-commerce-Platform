# E-Commerce Platform (Console-based)

This is a console-based e-commerce platform built using pure JavaScript and Node.js. The platform allows users to browse products, add items to their cart, and proceed to checkout. There is also an admin panel for managing the products in the inventory.

## Features
- **Product Listing**: Displays a list of available products with details like price and stock.
- **Product Details**: Shows detailed information about each product when selected.
- **Shopping Cart**: Allows users to add or remove products from their cart, view the cart, and calculate the total price.
- **Checkout**: Collects user details, confirms the order, and displays the order summary.
- **Admin Panel**: Admin users can add, update, or delete products from the inventory.

## Technologies Used
- **Node.js**: To run the platform in the console.
- **JavaScript**: For object-oriented programming (OOP) principles.

## File Structure

```bash
/ecommerce-platform
│
├── /classes
│   ├── Product.js           # Class for Product objects
│   ├── Cart.js              # Class for Cart functionality
│   ├── User.js              # Class for managing users (admin or customer)
│   └── Order.js             # Class for handling orders
│
├── /data
│   └── products.js          # Dummy data for the products
│
├── /controllers
│   ├── productController.js  # Manages product actions (listing, details)
│   ├── cartController.js     # Manages cart actions (add/remove, view cart)
│   ├── userController.js     # Handles user authentication (login/logout)
│   └── orderController.js    # Manages order actions (checkout, order status)
│
├── main.js                # Entry point of the application
└── README.md              # Project description and features
