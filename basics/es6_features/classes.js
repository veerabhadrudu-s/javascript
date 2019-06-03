// Example for defining classes in javascript.

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

let person1=new Person("Veera",31);
let person2=new Person("Veera",31);
let person3=new Person("Robert",31);
person1.printDetails();
console.log(`person1 and person2 are ${Person.isEquals(person1,person2)?"Equal":"Not Equal"}`);
console.log(`person1 and person3 are ${Person.isEquals(person1,person3)?"Equal":"Not Equal"}`);