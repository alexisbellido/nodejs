console.log('trying error handling')
// throw 'bwaaah'
// In Node.js, we don't throw strings, we just throw Error objects.

const args = process.argv.slice(2)
const num = parseInt(args[0], 10)

// if (num < 10) {
//     throw new Error('Ran out of coffee')
// } else {
//     console.log('all good, more than enough cups left')
// }

try {
    console.log(num * 2)
} catch(e) {
    console.log(`we can't duplicate non-numeric values`)
}