/* 
Examle about Promise Object. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 
*/
function incrimentValue(value) {    
    return ++value;
}
function printValue(value) {
    console.log(`Latest Value is ${value}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            value = incrimentValue(value);
            resolve(value);
        }, 1000);
    });
}
printValue(1000).then(printValue).then(printValue).then(printValue).then(printValue).
    then(printValue).then(printValue).then(printValue).then(printValue).then(printValue).then(printValue);