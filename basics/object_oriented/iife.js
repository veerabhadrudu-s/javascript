/* 
Immediatly Invoked function execution example.
IIFE keeps global/window object clean  
*/
var PersonModule = {};
//Below line will allow module to be extended if it's already exists or intitialize new module if it's not. 
//var PersonModule=PersonModule || {};
(function (module) {
    module.Person = function (name, age) {
        this.name = name;
        this.age = age;
        this.printDetails = function () {
            console.log("Name of the person is " + this.name + " and age is " + this.age);
        };
    }
})(PersonModule || {});

console.log(PersonModule);
var person1 = new PersonModule.Person("Veera", 31);
var person2 = new PersonModule.Person("Abraham", 21);
person1.printDetails();
person2.printDetails();
console.log(PersonModule.Person.prototype);