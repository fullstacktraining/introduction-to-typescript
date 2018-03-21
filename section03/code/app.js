const isAdmin = true;
const user = "John";
let welcome;
if (isAdmin) {
    welcome = `Hello ${user}`;
}
else {
    welcome = `${user} is not an admin`;
}
console.log(welcome);
