class Person {
  constructor(name) {
    this.name = name;
  }

  SayMyname() {
    return `My name is ${this.name}!`;
  }
}

module.exports = { Person };
