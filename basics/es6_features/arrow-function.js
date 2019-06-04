/* 
This is a sample example related to arrow function or lamda expression
Arrow function is alternative representation for ananymous function.
The major difference is it preserves "this" i.e 
in arrow function "this" keywork will refer/point to enclosing context object("this") when it was created.
In this example we have using Tempalte String feature using ``(backtick character).  
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printDetailsUsingAnanymous = function (message) {
        console.log(`${message} ${this.name}`);
        console.log(`Anonymous function - Person with name ${this.name} has age ${this.age} `);
        console.log(this);
        return ()=>console.log(`Anonymous function returned arrow function - `+this);
    };
    this.printDetailsUsingArrowFunction = (message) => {
        console.log(`${message} ${this.name}`);
        console.log(`Fat Arrow function - Person with name ${this.name} has age ${this.age} `);
        console.log(this);
    };
}

Person.prototype.arrowFuntionDefinedInPrototype=()=>console.log(`Prototype arrow function -`,this);

let person = new Person("Veera", 31);
let anonyFun = person.printDetailsUsingAnanymous;
let fatArrowFun = person.printDetailsUsingArrowFunction;
this.this_anonyFun = person.printDetailsUsingAnanymous;
//In the below function call "this" points to global object
let anonyFunRet=anonyFun("Greetings");
//Again here this below arrow function call(which was response from previous method call) will point "this" to global
//As we know that arrow function will point to closed context of "this" when it was created,In this case it's global.
anonyFunRet();
//In the Below function call "this" points to Current execution object (Object representing to this file/module). 
this.this_anonyFun("Greetings");
// As this is a lamda function reference, "this" in this function call will point to person object irrespective of the way we execute the function. 
fatArrowFun("Greetings");
person.arrowFuntionDefinedInPrototype();
/* 
In order to make "this" keyword to work in anonymous function ,we need to bind "this" context to anonymous function before invoking it.
This can be achived using any one of bind/call/apply function.
For more info check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply 
*/
anonyFun.call(person, "Greetings");
//anonyFun.apply(person,["Greetings"]);

//Another Example of Arrow function with respect to local module/file.
this.user = "Veera";
this.greetings = () => console.log(`Greetings ${this.user}`);
this.greetings();
console.log(this);

//Another example of arrow function defined as object method
//In this case enclosing scope or near by this scope while defing objectLiteral(which includes defining arrow function) is local module/file.
let objectLiteral = {
    name: "Garry",
    age: 25,
    printDetailsUsingArrowFunction: (message) => {
        console.log(`${message} ${this.name}`);
        console.log(`Fat Arrow function as object literal method - Person with name ${this.name} has age ${this.age} `);
        console.log(this);        
    }
};

objectLiteral.printDetailsUsingArrowFunction("Greetings");
console.log('Persons prototype is '+Person.prototype);
console.log('Persons prototype\'s prototype is '+Person.prototype.__proto__);
console.log(`Persons prototype's prototype is equal to Object's prototype ${person.__proto__.__proto__==Object.prototype}`);
console.log('objectLiteral prototype is '+objectLiteral.__proto__);
console.log(`Is objectLiteral prototype equal to Object\'s prototype ${objectLiteral.__proto__==Object.prototype}`);
console.log(`Is objectLiteral prototype's prototype ${objectLiteral.__proto__.__proto__}`);

function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}

console.log(`Methods of Person object - ${FindAllMethods(person)}`);
console.log(`Methods of Person prototype - ${FindAllMethods(Person.prototype)}`);
console.log(`Methods of objectLiteral - ${FindAllMethods(objectLiteral)}`);
