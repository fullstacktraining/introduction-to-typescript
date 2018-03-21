import IPerson from './iperson';
export default abstract class Human implements IPerson {
  name: string;
  age: number;
  constructor(name: string) {
    this.name = name;
  }
  abstract showAge(): number;
}