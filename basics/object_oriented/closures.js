/*
Example of closure.
Closure is a concept in which a function is generated and retured from an outer function , 
the generated function will have access to outer generated function state.
In this example closureFunction has accces to user object created in printUserDetails function and 
this state(user object) is private scope to rest of the program. 
*/


function printUserDetails(userName, age) {
    let user = {
        userName: userName,
        age: age
    };
    return function closureFunction(){
        console.log(`User with name ${user.userName} has ${user.age} year's of age.`);
    }
}

var closureFN=printUserDetails("Veera",31);
closureFN();

