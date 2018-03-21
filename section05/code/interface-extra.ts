interface IUser {
  name: string;
  readonly age: number;
  address?: string;
  [property: string]: any;
}

let adminUser: IUser = {
  name: "John",
  age: 33,
  test: 1,
  xyz: "asdf"
}

adminUser.test;
// adminUser["test"] --> ts version < 2.2