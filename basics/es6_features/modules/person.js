//Person class
export class Person{
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