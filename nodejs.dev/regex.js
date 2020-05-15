const parseArgs = require('minimist');

// $ node regex.js --needle "tiger" --haystack "I am looking for a tiger in the jungle" echo

// console.log(process.argv.slice(2));
// process.argv.slice(2).forEach(item => {
//     console.log(item);
// })

const args = parseArgs(process.argv.slice(2));
// console.log(args);
console.log(`Needle: '${args.needle}'. Haystack: '${args.haystack}'`);

// regular expression literal provides compilation of the regular expression
// when the script is loaded. If the regular expression remains constant, using this can improve performance.
// similar to Python's r'raw strings' so it will work escaping with just one backslash
let re = /ab+c/;

// calling the constructor function of the RegExp object
// provides runtime compilation of the
// regular expression. Use the constructor function when you know
// the regular expression pattern will be changing, or you don't know
// the pattern and are getting it from another source, such as user input.
// let re2 = new RegExp('ab+c');
// console.log(re2);

// an aside using map to return an array
// nums = [1, 2, 3]
// duplinums = nums.map((value, index) => {
//     console.log(`duplicating ${index}: ${value}`);
//     return value * 2;
// });
// console.log(duplinums);

// When you want to know whether a pattern is found in a string, use the test() or search() methods;
// for more information (but slower execution) use the exec() or match() methods.
// The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
let myArray;
let str;
re = /d(b+)d/g;

// the regex owns the method and the string is an argument
myArray = re.exec('cdbbdbsbz');
console.log(myArray);

re = /\w+\s/g;
str = 'fee fi fo fum';
// the string owns the method and the regex is an argument
myArray = str.match(re);
console.log(myArray);

// If you are executing a match simply to find true or false,
// use RegExp.prototype.test() method or String.prototype.search() instead.
re = /cat|dog/;
myAnimals = 'I have a cat and a horse and a cat';
// test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
m = re.test(myAnimals);
console.log('looking for my animals with test', m);

// search returns the index of the first match between the regular expression and the given string, or -1 if no match was found.
m = myAnimals.search(re);
console.log('looking for my animals with search', m);

re = /[xy]/;
str = 'SunxMoonyVenuexMarsyPluto';
console.log(`splitting ${str}`);
console.log(str.split(re));






