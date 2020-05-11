const fs = require('fs')
const fetch = require("node-fetch");

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

const callingAsync = async () => {
    const value = await wait(500);
    console.log(`== value from promise using async function: ${value}`);
}
callingAsync();

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          reject (err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
          return        // and we don't want to go any further
        }
        resolve(data)
      })
    })
  }
  
getFile('./file.json')
    .then(data => console.log(data))
    .catch(err => console.error(err))

// fetch
// with basic promise
url = 'https://pokeapi.co/api/v2/pokemon/ditto/'
fetch(url)
    .then(response => response.json())
    .then(json => console.log(`from basic promise: ${json.name}`))

// passing handler functions, the signatures of these functions are simple, they accept a single parameter of any type
const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}
    
const json = response => response.json()
    
fetch(url)
    .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
        console.log('Request succeeded with JSON response:', data.name)
    })
    .catch(error => {
        console.log('Request failed', error)
    })

// with async/await
const getWithFetch = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(`from async/await: ${json.name}`);
    } catch (error) {
      console.log(error);
    }
  };
  
getWithFetch(url);