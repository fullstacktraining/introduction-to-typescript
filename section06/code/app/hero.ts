import IHero from './ihero';
import Person from './person';
export default class Hero extends Person implements IHero {
  superpowers: string[] = [];
  constructor(name: string) {
    super(name);
  }
  addPower(power: string): void {
    this.superpowers.push(power);
  }
  listPowers(): string[] {
    return this.superpowers;
  }
}