// Class for managing users (admin or customer) 
class User {
  constructor(id, name, email, isAdmin = false) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.isAdmin = isAdmin;
  }

  login() {
      console.log(`${this.name} logged in`);
  }

  logout() {
      console.log(`${this.name} logged out`);
  }
}

module.exports = User;
