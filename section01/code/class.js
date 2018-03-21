class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hello ${this.name}`;
  }
}

class SuperHero extends Person {
  constructor(name, power) {
    super(name);
    this.power = power;
  }

  introduce() {
    return `${super.introduce()}. Your superpower: ${this.power}`;
  }
}

const peter = new SuperHero('Spiderman', 'webbing');
console.log(peter.introduce());