const isAdmin: boolean = true;
const user: string = "John";
let welcome: string;

if (isAdmin) {
  welcome = `Hello ${user}`;
} else {
  welcome = `${user} is not an admin`;
}

console.log(welcome);