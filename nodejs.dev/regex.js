const parseArgs = require('minimist');

// $ node regex.js --needle "tiger" --haystack "I am looking for a tiger in the jungle" echo

const args = parseArgs(process.argv.slice(2));
// console.log(args);
console.log(`Needle: '${args.needle}'. Haystack: '${args.haystack}'`);

// regular expression literal provides compilation of the regular expression
// when the script is loaded. If the regular expression remains constant, using this can improve performance.
let re = /ab+c/;
console.log(re);

// calling the constructor function of the RegExp object
// provides runtime compilation of the
// regular expression. Use the constructor function when you know
// the regular expression pattern will be changing, or you don't know
// the pattern and are getting it from another source, such as user input.
// let re2 = new RegExp('ab+c');
// console.log(re2);




