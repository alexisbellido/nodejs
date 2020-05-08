let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const wait = ms => {
    return new Promise((resolve, reject) => {
        if (ms < 5) {
            reject(`you passed a very low number, ${ms}, please use something equal or greater than 5`);
        } else {
            setTimeout(resolve('success value returned'), ms);
            // setTimeout(resolve, ms);
            // just resolve without waiting
            // resolve();
        }
    });
};

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(1000)
    .then((value) => {
        console.log(`value from promise: ${value}`);
    })
    .catch((error) => {
        console.log(`error from reject: ${errror}`);
    });

wait(3)
    .then((value) => {
        console.log(`value from promise: ${value}`);
    })
    .catch((error) => {
        console.log(`error from reject: ${error}`);
    });