// class Person {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet(): string {
//     return `Hello ${this.name}`
//   }
// }

// class Hero extends Person {
//   private superpowers: string[] = [];
//   constructor(name: string) {
//     super(name);
//   }
//   addPower(power: string): void {
//     this.superpowers.push(power);
//   }
//   listPowers(): string[] {
//     return this.superpowers;
//   }
//   greet(): string {
//     this.name = ""
//     return `Yo, whassup ${this.name}`;
//   }
// }

// let batman = new Hero("Bruce");