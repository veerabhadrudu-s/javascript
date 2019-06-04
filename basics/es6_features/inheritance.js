/* 
Inheritance example.
Javascript doesn't support multiple inheritance.However, it support's multilevel inheritance. 
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Person with name ${this.name} has ${this.age} years of age`;
    }
}

class Student extends Person {
    constructor(name, age, institute) {
        super(name, age);
        this.institute = institute;
    }
    getDetails() {
        return super.getDetails() + ` is studing in ${this.institute} institute`;
    }
}

class Employee extends Person {
    constructor(name, age, organization) {
        super(name, age);
        this.organization = organization;
    }

    getDetails() {
        return super.getDetails() + ` is working in ${this.organization} organization`;
    }
}

let person=new Person("Veera",31);
let student = new Student("Garry", 21, "MIT");
let employee = new Employee("John", 27, "Google");
console.log(person.getDetails());
console.log(student.getDetails());
console.log(employee.getDetails());
console.log(`Person class type is ${typeof Person}`);
console.log(`Person class object type is ${typeof person}`);
console.log(`Is Person class prototype is equal to Object.prototype ${Person.prototype===Object.prototype}`);
console.log(`Is Person class prototype's prototype is equal to Object.prototype ${Person.prototype.__proto__===Object.prototype}`);
console.log(`Is Employee class prototype is equal to Person class ${Employee.prototype===Person}`);
console.log(`Is Employee class prototype's prototype is equal to Person class ${Employee.prototype.__proto__===Person}`);
console.log(`Is Employee class prototype's prototype is equal to Person class prototype ${Employee.prototype.__proto__===Person.prototype}`);
console.log(`Is Employee class prototype's grand-parent prototype is equal to Object.prototype ${Employee.prototype.__proto__.__proto__===Object.prototype}`);

