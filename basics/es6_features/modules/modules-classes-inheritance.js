/* 
ES6 modules and inheritance in one example
Make sure to run this program using below babel command.
npx babel-node basics/es6_features/modules/modules-classes-inheritance.js 

Babel is a tool/compiler which converts ES6 code to Before ES6 code.
babel-node command is a CLI that works exactly the same as the Node.js CLI, 
with the added benefit of compiling with Babel presets and plugins before running it.

For more info on this check out below links
https://babeljs.io/docs/en/babel-node
https://github.com/babel/example-node-server
https://babeljs.io/docs/en/babel-cli
https://babeljs.io/docs/en/
https://babeljs.io/en/setup
*/

import { Person } from "./person";
import { Employee } from "./employee";
import { Student } from "./student";

let person = new Person("Veera", 31);
let student = new Student("Garry", 21, "MIT");
let employee = new Employee("John", 27, "Google");
console.log(person.getDetails());
console.log(student.getDetails());
console.log(employee.getDetails());
console.log(`Person class type is ${typeof Person}`);
console.log(`Person class object type is ${typeof person}`);
console.log(`Is Person class prototype is equal to Object.prototype ${Person.prototype === Object.prototype}`);
console.log(`Is Person class prototype's prototype is equal to Object.prototype ${Person.prototype.__proto__ === Object.prototype}`);
console.log(`Is Employee class prototype is equal to Person class ${Employee.prototype === Person}`);
console.log(`Is Employee class prototype's prototype is equal to Person class ${Employee.prototype.__proto__ === Person}`);
console.log(`Is Employee class prototype's prototype is equal to Person class prototype ${Employee.prototype.__proto__ === Person.prototype}`);
console.log(`Is Employee class prototype's grand-parent prototype is equal to Object.prototype ${Employee.prototype.__proto__.__proto__ === Object.prototype}`);
