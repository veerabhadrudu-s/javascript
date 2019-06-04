// Example for defining classes in javascript.
//Don't confuse class with other programing language that offers.
//Here in javascript Class is a syntactic suger of function/Construcutor function.
//So the type of class in JavaScript is still function

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printDetails(){
        console.log(`Name of the person is ${this.name} and the age is ${this.age}`);
    }

    static isEquals(person1,person2){
        return person1.name===person2.name && person1.age===person2.age;
    }
    
}

function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}

let person1=new Person("Veera",31);
let person2=new Person("Veera",31);
let person3=new Person("Robert",31);
person1.printDetails();
console.log(`person1 and person2 are ${Person.isEquals(person1,person2)?"Equal":"Not Equal"}`);
console.log(`person1 and person3 are ${Person.isEquals(person1,person3)?"Equal":"Not Equal"}`);
console.log(`type of Person class is ${typeof Person}`);
console.log('Printing instance of person object - '+person1);
console.log('Printing Person class - '+Person);
console.log('Persons prototype is '+Person.prototype);
console.log('Persons prototype\'s prototype is '+Person.prototype.prototype);
for(let field in person1){
    console.log(`Printing field of person object - ${field}`);
}
//All the methods we define in classes will reside in Prototype object of class(apart from static methods). 
console.log(`Methods of Person class Prototype - ${FindAllMethods(Person.prototype)}`);
