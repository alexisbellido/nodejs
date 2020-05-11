const https = require('https')

hostname = 'pokeapi.co'
path = '/api/v2/pokemon/ditto/'

const options = {
  hostname,
  port: 443,
  path,
  method: 'GET'
}
console.log(options)

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      console.log(`body.name: ${body.name}`);
    });
})

req.on('error', error => {
  console.error(error)
})

req.end()