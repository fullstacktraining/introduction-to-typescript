type User = {
  name: string;
  age: number;
};

const myUser = {};
// (myUser as User).age = 35;
(<User>myUser).age = 28;
