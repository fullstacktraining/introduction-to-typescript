abstract class Human {
  public name: string;
  public age: number;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet(): void;
}

