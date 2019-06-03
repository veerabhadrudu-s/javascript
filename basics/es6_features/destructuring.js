// Example of Destructuring Arrays and Objects.
let numbers = [1, 2, 3, 4];
let person = {
    name: "Veera",
    age: 31,
    greet: function () {
         console.log(`Greetings ${this.name}`); 
    }
};

// Destructuring of Array.
// In array,in order to skip element during destructuring we skip it using 2 comma's.
// In the below example 3rd eleemnt is skipped.
let [one, two, , four] = numbers;
// Destructuring of Object.
let { name, age, greet } = person;
// Destructuring of Object. Using custom variables.
let { name: person_name, age: person_age } = person;
console.log(`Printing destructured array values : ${one} ${two} ${four}`);
console.log(`Printing destructured object values : name - ${name} age - ${age}`);
console.log(`Printing destructured object values : person_name - ${name} person_age - ${age}`);
greet.call(person);
