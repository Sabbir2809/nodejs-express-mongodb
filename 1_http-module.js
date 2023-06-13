// Dependencies: import node http core module
const http = require('http');

// create server
const server = http.createServer((req, res) => {
  res.end('Hello Node.js');
});

// port
server.listen(5000, () => {
  console.log('Success');
});
