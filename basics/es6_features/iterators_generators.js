/* 
This example primarly focuses on iterators and generators.

*/

console.log("Example 1:-Iterator for constructed arrays starts");

let names = ["Veera", "Vinod", "Prasad", "Garry"];
names[Symbol.iterator] = function () {
    let index = 0;
    return {
        next: function () {
            index++;
            return {
                done: names.length >= index ? false : true,
                value: `Value @ Index ${index-1} is ${names[index - 1]}`
            };
        }
    }
}
for (const name of names)
    console.log(name);

console.log("Example 1:-Iterator for constructed arrays ends");
console.log();
console.log("Example 2:-Iterator for class example starts");

class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

Person.prototype[Symbol.iterator] = function () {
    let hobbies = this.hobbies;
    let name = this.name;
    let index = 0;
    return {
        next: function () {
            index++;
            return {
                done: hobbies.length >= index ? false : true,
                value: `${name} has hobby -> ${hobbies[index - 1]}`
            }
        }
    }
}
let person1 = new Person("Veera", 32, ["Cooking", "Learning", "Television"]);
let person2 = new Person("Garry", 25, ["Cooking", "Tennis", "Swimming"]);
for (const personHobby of person1)
    console.log(personHobby);
for (const personHobby of person2)
    console.log(personHobby);

console.log("Example 2:-Iterator for class example ends");
console.log();
console.log("Example 3:-Generators simple example");

function* simpleGenerator() {
    for (let index = 1; index <= 10; index++)
        yield index;
}
for (const value of simpleGenerator())
    console.log(value);
console.log("Example 3:-Generators simple example");
console.log();
console.log("Example 4:-Generators for class example starts");

class Employee {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
}

Employee.prototype[Symbol.iterator] = function* () {
    for (const skill of this.skills)
        yield `${this.name} has skill ${skill}`;

}

let employee1 = new Employee("Veera", 32, ["Java", "JavaScript", "Angular", "FullStack", "Linux Admin", "Cloud Admin"]);
let employee2 = new Employee("Garry", 25, ["NodeJS", "JavaScript", "ReactJS"]);
for (const employeeSkill of employee1)
    console.log(employeeSkill);
for (const employeeSkill of employee2)
    console.log(employeeSkill);
console.log("Example 4:-Generators for class example ends");