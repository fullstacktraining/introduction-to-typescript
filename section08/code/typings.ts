// import * as _ from "underscore";

// const users: { name: string, age: number }[] = [{
//   name: "John",
//   age: 33
// }, {
//   name: "Steve",
//   age: 18
// }, {
//   name: "Kate",
//   age: 25
// }];

// const maxAge = _.max(users, user => user.age);
// console.log(maxAge);

import * as fs from "fs";
const file: string = fs.readFileSync('./test.txt', 'utf-8');