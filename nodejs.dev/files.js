const fs = require('fs');
const path = require('path')

// using path

const notes = '/users/joe/notes.txt'

console.log(path.dirname(notes)) // /users/joe
console.log(path.basename(notes)) // notes.txt
console.log(path.basename(notes, path.extname(notes))) // filename without extension: notes
console.log(path.extname(notes)) // .txt

const name = 'joe'
console.log(path.join('/', 'users', name, 'notes.txt')) //'/users/joe/notes.txt'
console.log(path.resolve('joe.txt'))

// using fs
filePath = './file.json'

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //we have access to the file stats in `stats`
  // console.log(stats);
  console.log(stats.isFile())
  console.log(stats.size)
})

// fs.open(filePath, 'r', (err, fd) => {
//   //fd is our file descriptor
//   console.log(fd)
// })

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }

  //no errors, process data
  console.log(data)
})

const content = 'Some content!\n'

outputFile = 'test.txt'
// could pass flag to append
fs.writeFile(outputFile, content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`file ${outputFile} written successfully`)
})

// or use append handy method
currentDate = new Date();
let appendContent = `timestamp is: ${currentDate}\n`
fs.appendFile('file.log', appendContent, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
})