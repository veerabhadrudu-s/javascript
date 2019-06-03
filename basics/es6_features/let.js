/*
Let keyword example. 
Let keyword allows us to define variable's at block-level (new scope otherthan global and local).
Let keyword doesn't support hosting feature like var keyword supports i.e variables using let keyword 
should be defined before they are used. 
*/
let a=20;

{
    let a=10;
    console.log(a);
}

console.log(a);
//Below line will generate error as the variable using let is declared after it's been used.
b=30;
console.log(b);
let b;