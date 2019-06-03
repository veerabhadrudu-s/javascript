//This is a sample example related to arrow function or lamda expression
//Arrow function is alternative representation for ananymous function.
//The major difference is it preserves "this" i.e in arrow function "this" keywork will refer/point to enclosing context object.
//In this example we have using Tempalte String feature using ``(backtick character). 

function Person(name,age){
    this.name=name;
    this.age=age;
    this.printDetailsUsingAnanymous=function(message) {
        console.log(`${message} ${this.name}`);
        console.log(`Anonymous function - Person with name ${this.name} has age ${this.age} `);
    };
    this.printDetailsUsingArrowFunction=(message)=>{        
        console.log(`${message} ${this.name}`);
        console.log(`Fat Arrow function - Person with name ${this.name} has age ${this.age} `);
    };
}

let person=new Person("Veera",31);
let anonyFun=person.printDetailsUsingAnanymous;
let fatArrowFun=person.printDetailsUsingArrowFunction;

anonyFun("Greetings");
fatArrowFun("Greetings");
// Inorder to make "this" keyword to work in anonymous function ,we need to bind "this" context to anonymous function before invoking it.
// This can be achived using bind/call/apply function.
// Bind method will bing context and return's new function refrence(It doesn't invoke function)
// Call method will bind and invoke the function.
// apply function is also like call function ,the difference is in the way we pass arguments to these functions.
// call expects function arguments in comma seperated and apply expects in the form of array.
// For more info check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
anonyFun.call(person,"Greetings");
anonyFun.apply(person,["Greetings"]);