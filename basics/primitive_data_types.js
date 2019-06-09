// String data type
var name = "Veera";
//Number data type
var age = 31;
// Boolean data type
var isSummer = true;

console.log(name == "Veera" ? "Strings Matched" : "Strings Not Matched");
console.log(name == new String("Veera") ? "Strings Matched using new operator with double equals" : "Strings Not Matched");
console.log(`type of Veera is ${typeof "Veera"} and type of new String("Veera") is ${typeof new String("Veera")}`)
console.log(name === new String("Veera") ? "Strings Matched using new operator also" : `Strings Match failed using triple equals because types are not matching`);

