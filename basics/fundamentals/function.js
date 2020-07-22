/* Every thing in javascript is Object including functions , Every function in javascript is instance of Function object.
We can test it using any function name using instanceof Function.Due to this reason every function in java script has certain default 
properties and methods. All those properties or methods can be used inside function using Function object or using name of 
the same function.

Example :- 

function abc(){
	Function.arguments;
	(or)
	abc.arguments;
}

abc.bind();
abc.call();

All the above methods and properties are defined in Function.prototype. So every function( abc function from above example ) 
that we define in javascript is instanceof Function object and those function objects can access methods and properties of 
Function.prototype.

Also "Object" function is also a function object. You can test it using -> Object instanceof Function. 
So on "Object" function object we can invoke methods such as below ,

Object.defineProperty 
Object.keys
Object.arguments
Object.bind
Object.call

Note from above that "Object" function object has functions from Function.prototype , this is one of the reason why we can say 
"Object" is a function object.

Also we already know that every "user defined" function object in javascript will have prototype property with empty object and 
that prototype will have it's parent prototype property as Object.prototype object (which is root prototype object which has 
certain predefined methods such as hasOwnPrototype,isPrototypeOf,toString etc.) 

So when ever we invoke function object using new operator , a new object is created by javascript and that new object can be 
referenced using "this" inside that function body/code and all the properties and methods assigned to that "this" reference is 
appended/assigned to that newly created object. Also properties and methods defined in function object prototype property is inherited  
by newly created object and this inheritance goes until Object.prototype where Object.prototype.__proto__ is null . 

Note that newly created object will never get properties or methods of function object , it only gets properties and methods assigned to 
"this" reference and from function object prototype property and it's hierarchy. 

 */

/*
 PLEASE PAY ATTENTION TO BELOW COMMENT.

 Object function object __proto__ property is Function.prototype.But, Function.prototype is Object.prototype.__proto__.
 So , Every object in javascript( including function type object's) will have root prototype as Object.prototype
 
 Following are the all objects hierarchy in java script, 

 1) Object.prototype is the root object in the hierarchy.
 2) Function.prototype is the next object in the hierarchy.Because, Function.prototype.__proto__ is Object.prototype.
 Child 1 of Function.prototype) Function function object and Sibling to Object function object. Because, Function.__proto__ is Function.prototype. 
 Child 2 of Function.prototype) Object function object and Sibling to Function function object. Because, Object.__proto__ is Function.prototype. 
 
 Also, Function function object is instanceof Object function object and 
 Object function object is instanceof Function function object.
 Above statement might be confusing .But, Logically it makes sense.

*/

console.log("Start of example 1");
console.log("What is Object.prototype.__proto__ ->  %s  ",Object.prototype.__proto__)
console.log(`Is Function.prototype.__proto__ == Object.prototype  ? -> ${Function.prototype.__proto__ == Object.prototype}`);
console.log(`Is Object.__proto__ == Function.prototype ? -> ${Object.__proto__ == Function.prototype}`);
console.log(`Is Function.__proto__ == Function.prototype ? -> ${Function.__proto__ == Function.prototype}`);
console.log(`Is Object instanceof Function ? ->  ${Object instanceof Function}`);
console.log(`Is Function instanceof Object ? -> ${Function instanceof Object}`);
console.log("End of example 1");
console.log();
console.log();

//Example 2
console.log("Start of example 2");

function Person() {
	this.name = "Veera";
	this.greetings = function () {
		console.log("Greetings " + this.name);
	};
}

Person.functionObjectProperty = "testFunctionObjectProperty";
Person.functionObjectMethod = function () {
	console.log("testfunctionObjectMethod");
};

Person.prototype.prototypeProperty = "testPrototypeProperty";
Person.prototype.prototypeMethod = function () {
	console.log("testPrototypeMethod");
};


console.log(Person.functionObjectProperty); // Output -> "testFunctionObjectProperty"
Person.functionObjectMethod(); // Output -> "testFunctionObjectProperty"

console.log(Person instanceof Function); // Output -> true . This indicates Person function is a "Function" object.
console.log(Object instanceof Function); // Output -> true . This indicates Object function is a "Function" object.
console.log(String instanceof Function); // Output -> true . This indicates String function is a "Function" object.
console.log(Number instanceof Function); // Output -> true . This indicates Number function is a "Function" object.

var person = new Person();

console.log(person instanceof Person); // Output -> true . This indicates "person" is a reference object of Person created using "new" operator on Person Function object.

console.log(person.prototypeProperty); // Output -> "testPrototypeProperty"
person.prototypeMethod(); // Output -> "testPrototypeMethod"


console.log(person.functionObjectProperty); // Output -> undefined
person.functionObjectMethod(); // Output -> undefined

/* 
Note in the above example "person" object doesn't inherit "Person" function object's property "functionObjectProperty" or method "functionObjectMethod".

You can apply above example concepts to all javascript function objects sunch as String,Number,Array etc.

Conclusion:- In javascript everything is object this includes functions and primitive types . functions are special type of objects which can be used to repetedly execute group of instructions as a procedure or it can be used to create application objects using new operator. Also prototypes can be used to achieve inheritance.   

Below reference links cab be used to understand above explained concepts ,

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions


Make sure to check below links also to understand implementing inheritance using prototypes,constructor function and call binding method before going to study ES6 features.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model 
*/