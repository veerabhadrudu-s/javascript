function invokeAsyncFunction() {

    asyncFunction().then((response) => {
        console.log(`resolve`, response);
    }).catch((error) => {
        console.error(`error`, error);
    });

}

async function asyncFunction() {

    try {
        for (let index = 0; index < 10; index++) {
            let promiseObj = await returningPromise(index);
            console.log(promiseObj);
        }
        console.log(`out of loop`);
        return Promise.resolve(`async function resolve`);
    } catch (error) {
        console.error(error);
        return Promise.reject(`async function resolve`);
    }

}

function returningPromise(counter) {
    const COUNTER_THRESHOLD = 5;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Current counter value ${counter}`);
            if (counter < COUNTER_THRESHOLD)
                resolve(`Resolved promise with counter value ${counter}`);
            else
                reject(`Counter has reached threshold ${COUNTER_THRESHOLD}`);
        }, 500);
    });
}

invokeAsyncFunction();