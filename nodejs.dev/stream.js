const http = require('http')
const fs = require('fs')

// const server = http.createServer(function(req, res) {
//   fs.readFile(__dirname + '/file.json', (err, data) => {
//     res.end(data)
//   })
// })

// If the file is big, the operation will take quite a bit of time. Here is the same thing written using streams

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(__dirname + '/file.json')
    stream.pipe(res)
})

const port = 3000
console.log(`Server running at port ${port}`)
server.listen(port)