//Person class
export class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getDetails() {
        return `Person with name ${this.name} has ${this.age} years of age`;
    }

    static isEquals(person1,person2){
        return person1.name===person2.name && person1.age===person2.age;
    }
    
}