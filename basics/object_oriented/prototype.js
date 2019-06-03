/* 
Below literal notation way of creating javascript object will not have direct access to it's prototype object.
However, In some javascript engines such as chrome(v8 engine) has exposed some way to read prototype of 
literal notation object(using __proto__ variable/property). 
But using Object generic method Object.getPrototypeOf(object) , we can get prototype of object.
By default,All these literal Object types will inherit Object.prototype object as there prototype. 
*/
var person1={
    name:"Veera",
    age:31
}
//console.log(person.prototype); // this line will print undefined
console.log(person1.__proto__ == Object.prototype);
console.log(Object.getPrototypeOf(person1) == Object.prototype);
var person2={
    name:"Dennis Ritchie",
    age:24
}
person1.__proto__.hello=function(){
    console.log('Hello '+this.name);
}
person1.hello();
//person2 can also access hello method,which means this is inherited from Object.prototype. 
person2.hello();
//Below line will execute with output Hello undefined. 
//This is because we don't have name field in Object.prototype  
Object.prototype.hello();

/*
Object's created using constructor function will have it's own new prototype object and 
that prototype object will inherit Object.prototype 
*/
function Person(name,age){
    this.name=name;
    this.age=age;
}
console.log(Person.prototype == Object.prototype);
Person.prototype.greet=function(){
    console.log("Greeting's "+this.name);
}
var con_fun_object=new Person("Larry Walls",31);
con_fun_object.hello();
con_fun_object.greet();
//This will gererate error as greet function defined in prototype object of Person constructor function
//person1.greet();