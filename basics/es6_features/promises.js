/* 
Examle about Promise Object. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 
*/

//Example 1
/* function incrimentValue(value) {
    return ++value;
}
function printValue(value) {
    console.log(`Latest Value is ${value}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let thresholdValue = 1005;
            if (thresholdValue > value) {
                value = incrimentValue(value);
                resolve(value);
            }
            reject(`Value grater than threshold ${thresholdValue}`);

        }, 1000);
    });
}
printValue(1000).
    then(printValue).then(printValue).then(printValue).
    then(printValue).then(printValue).then(printValue).
    then(printValue).then(printValue).then(printValue).
    then(printValue).catch(reason => {
        console.log(`Reason for failure is ${reason}`);
    }); */

//Example 2
function PromiseDetails(promiseLevelToReject, currentPromiseLevel = 1) {
    this.promiseLevelToReject = promiseLevelToReject;
    this.currentPromiseLevel = currentPromiseLevel;
}

function testNestedPromises(promiseDetails) {

    return new Promise((resolve, reject) => {
        if (promiseDetails.promiseLevelToReject >= promiseDetails.currentPromiseLevel) {
            console.log(`Current Promise Level is ${promiseDetails.currentPromiseLevel}`);
            ++promiseDetails.currentPromiseLevel;
            resolve(promiseDetails);
        }
        reject(`currentPromiseLevel - ${promiseDetails.currentPromiseLevel} grater than promiseLevelToReject ${promiseDetails.promiseLevelToReject}`);

    });

}
// Scenario 1 -> Failure after 1st then due to threashold breach
/* testNestedPromises(new PromiseDetails(1,1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`));
 */

// Scenario 2 -> Failure after 3rd then due to threashold breach
/* testNestedPromises(new PromiseDetails(3, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`)); */


/* // Scenario 3 -> No Failure due to no thereshold breach in promise chain.
testNestedPromises(new PromiseDetails(5, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fifth Then - `, result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`)); */

// Scenario 4 -> you can't have promise error handling function in then and prmosie then chain after that.
// Below scenario will continue to third then promise chain ,even though it was failed in second then, This behaviour is due to failure/exception handler/anonymous function defined in second then.So to over come this issue don't mix error function's in promise then chain (or) perform throw exception in the second then error handler/anaonymous function.This is demonstrated in next example.

/* testNestedPromises(new PromiseDetails(1, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); }, function (reason) { console.log(`Second then - Reason for failure is ${reason}`);  })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fifth Then - `, result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`));  */

// Secenario 5 Alteranate Solution to above scenario by throwing exceptions in then error handling functions   
// Scenario 5.a 
/* testNestedPromises(new PromiseDetails(1, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); }, function (reason) { console.log(`Second then - Reason for failure is ${reason}`); throw new Error("Second then exception"); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fifth Then - `, result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`));
 */
// Scenario 5.b
/* testNestedPromises(new PromiseDetails(1, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); }, function (reason) { console.log(`Second then - Reason for failure is ${reason}`); throw new Error("Second then exception"); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); }, function (reason) { console.log(`Third then - Reason for failure is ${reason}`); throw new Error("Third then exception"); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); }, function (reason) { console.log(`Fouth then - Reason for failure is ${reason}`); throw new Error("Fourth then exception"); })
    .then(function (result) { console.log(`Fifth Then - `, result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`));  */


// Scenario 6.a - Finally block while success
/* testNestedPromises(new PromiseDetails(10, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fifth Then - `, result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`))
    .finally(() => console.log(`Inside finally block.`));
 */
// Scenario 6.b - Finally block while failure

testNestedPromises(new PromiseDetails(10, 1))
    .then(result => { console.log(`First Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Second Then - `, result); throw new Error("Second Then"); })
    .then(function (result) { console.log(`Third Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fourth Then - `, result); return testNestedPromises(result); })
    .then(function (result) { console.log(`Fifth Then - `, result); })
    .catch(reason => console.log(`Inside Catch block - Reason for failure is ${reason}`))
    .finally(() => console.log(`Inside finally block.`));
