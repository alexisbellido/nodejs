// const dotenv = require('dotenv');
// dotenv.config();

// in just one line
// require('dotenv').config();

const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT

const environment = process.env.NODE_ENV || 'development';

console.log(`COLOR from enviroment variable: ${process.env.COLOR}`);
console.log(`environment: ${environment}`);

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})