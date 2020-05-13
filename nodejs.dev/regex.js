const parseArgs = require('minimist');

// $ node regex.js --needle "tiger" --haystack "I am looking for a tiger in the jungle" echo

const args = parseArgs(process.argv.slice(2));
// console.log(args);
console.log(`Needle: '${args.needle}'. Haystack: '${args.haystack}'.`);