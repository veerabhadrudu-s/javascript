/* 
Null and undefined are equal.However ,there both types are not same. 
Undefined is not equal to any other value except null.
Null is used during manual clearing of value of a variable.However,Undefined indicates error state.
NaN is value is generated/assigned during arithmetic operaion is failed.
 */

var var1,var2=null,num1=NaN;
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof num1);
console.log("Null and Undefined are equal in values. "+(var1==var2));
console.log("Null and Undefined are not equal in both value and type. "+(var1===var2));
console.log("adc"-2);