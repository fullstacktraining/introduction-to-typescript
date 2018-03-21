import IHero from "./ihero";
import Person from "./person";
export default class Hero extends Person implements IHero {
  public superpowers: string[] = [];
  constructor(name: string) {
    super(name);
  }
  public addPower(power: string): void {
    this.superpowers.push(power);
  }
  public listPowers(): string[] {
    return this.superpowers;
  }
}
