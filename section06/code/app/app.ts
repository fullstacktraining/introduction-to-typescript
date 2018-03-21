import Hero from './hero';

let batman = new Hero("batman");
batman.age = 33;
batman.addPower("money");
batman.addPower("batarang");
console.log(batman.listPowers());