class User {
  constructor(first = '', last = '') {
    this.firstName = first.trim();
    this.lastName = last.trim();
  }
  fullName() {
    if (this.firstName && this.lastName) {
      return (
        this.firstName.charAt(0).toUpperCase() +
        this.firstName.substring(1) +
        ' ' +
        this.lastName.charAt(0).toUpperCase() +
        this.lastName.substring(1)
      );
    }
  }
  sayHello(name) {
    if (name) {
      return `Hi ${name}! Nice to meet you I'm ${this.fullName()}!`;
    } else {
      throw new Error('No name provided!');
    }
  }
}

module.exports = User;
