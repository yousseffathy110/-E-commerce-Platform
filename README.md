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
```

This document outlines the classes and their properties and methods for an e-commerce system.

## 1. Product

### Properties:
- `id`: Unique identifier for the product.
- `name`: Name of the product.
- `description`: Description of the product.
- `price`: Price of the product.
- `stock`: Current stock quantity of the product.

### Methods:
- `updateStock(quantity)`: Reduces the stock by the given quantity.
- `getDetails()`: Returns a string with the product's details.

## 2. Cart

### Properties:
- `items`: Array of products in the cart.
- `totalPrice`: Total price of the items in the cart.

### Methods:
- `addToCart(product)`: Adds a product to the cart.
- `removeFromCart(product)`: Removes a product from the cart.
- `calculateTotal()`: Calculates the total price of the items in the cart.

## 3. User

### Properties:
- `id`: Unique identifier for the user.
- `name`: Name of the user.
- `email`: Email address of the user.
- `isAdmin`: Boolean indicating whether the user is an admin.

### Methods:
- `login()`: Logs the user in (admin or customer).
- `logout()`: Logs the user out.

## 4. Order

### Properties:
- `id`: Unique identifier for the order.
- `user`: User who placed the order.
- `items`: Array of products in the order.
- `status`: Status of the order (e.g., pending, shipped, delivered).
- `totalAmount`: Total amount of the order.

## Authors:

- yousef fathy
- mohammed atef
