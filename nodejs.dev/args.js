const chalk = require('chalk')
const ProgressBar = require('progress')
const parseArgs = require('minimist')

// run with:
// $ node args.js name=joe

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
// })

console.time('measure time');

const args = process.argv.slice(2)
const name = args[0].split('=')[1];
console.log(`the name is ${name}`);

// using minimist
// run with:
// $ node args.js name=mary --debug=true --num=4 --dry-run -v
const argsWithMinimist = parseArgs(process.argv.slice(2));
console.log(argsWithMinimist);

const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

console.timeEnd('measure time');

console.log('\x1b[33m%s\x1b[0m', 'Hi!') // yellow
console.log(chalk.green('Hi!, I am using Chalk')) // a better way with chalk library

const bar = new ProgressBar(':bar', { total: 100 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 10)


