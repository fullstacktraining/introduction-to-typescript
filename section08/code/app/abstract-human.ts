import IPerson from "./iperson";
export default abstract class Human implements IPerson {
  public name: string;
  public age: number;
  constructor(name: string) {
    this.name = name;
  }
  public abstract showAge(): number;
}
