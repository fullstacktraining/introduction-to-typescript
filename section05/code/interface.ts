interface IUser {
  name: string;
  readonly age: number;
  address?: string;
}

interface IGreet {
  (name: string, language: string): string
}

let hello: IGreet;
hello = function(n: string, lang: string) {
  if(lang === "en") {
    return `Hello ${n}!`;
  } else {
    return `Hola ${n}!`;
  }
}

hello("John", "en");

let myUser: IUser = {
  name: "John",
  age: 33
};

// myUser.age = 43;
