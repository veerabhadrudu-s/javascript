//Different Way's to create object.
//Literal Notation.
var person ={
    name:"Veera",
    age:"31",
    printDetails:function (){
        console.log("Name of the person is "+this.name+" and age is "+this.age);
    }
}
//Using new Object 
var person2=new Object()
person2.name="Jhon"
person2.age=25;
person2.printDetails=function (){
    console.log("Name of the person is "+this.name+" and age is "+this.age);
};
//Using Object.create(prototype)
var person3=Object.create(null);
person3.name="Micheal"
person3.age=52;
person3.printDetails=function (){
    console.log("Name of the person is "+this.name+" and age is "+this.age);
};

//Using constructor function.
function Person(name,age){
    this.name=name;
    this.age=age;
    this.printDetails=function (){
        console.log("Name of the person is "+this.name+" and age is "+this.age);
    };
  console.log(this);
}

//Out of all approaches , constructor function is the best approach.
//it allows us to define template to create objects (by passing agruments to constructor function
// during object creation) and it has it's own prototype object.
person.printDetails();
person2.printDetails();
person3.printDetails();
new Person("Abraham",21).printDetails();
//Below example direclty binds the values and printDetails function to global object of node. 
//In case of javascript running in browser, it will bind to window object.
//This is due to direct invokation of function rather than calling as constructor function using new keyword.
Person("Jhon",47);
global.printDetails();

