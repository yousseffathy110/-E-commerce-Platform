// classes/Product.js
class Product {
  constructor(id, name, description, price, stock) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.stock = stock;
  }

  updateStock(quantity) {
      this.stock -= quantity;
  }

  getDetails() {
      return `Product ID: ${this.id}\nName: ${this.name}\nDescription: ${this.description}\nPrice: $${this.price}\nStock: ${this.stock}`;
  }
}

module.exports = Product;

