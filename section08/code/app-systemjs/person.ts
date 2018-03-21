import Human from "./abstract-human";
export default class Person extends Human {
  constructor(name: string) {
    super(name);
  }
  public showAge(): number {
    return this.age;
  }
}
