// Class for Cart functionality
class Cart {
  constructor() {
      this.items = [];
      this.totalPrice = 0;
  }

  addToCart(product) {
      this.items.push(product);
      this.totalPrice += product.price;
  }

  removeFromCart(productId) {
      const index = this.items.findIndex(p => p.id === productId);
      if (index !== -1) {
          this.totalPrice -= this.items[index].price;
          this.items.splice(index, 1);
      }
  }

  calculateTotal() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    return this.totalPrice; // Return the calculated total
}
}

module.exports = Cart;
