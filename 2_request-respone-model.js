// Dependencies: node http core module
const http = require('http');

// create server
const server = http.createServer((req, res) => {
  // request url: /
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>This is Home Page</h1>`);
    res.end();
  }
  // request url: /about
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>This is About Page</h1>`);
    res.end();
  }
  // request url: /contact
  else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>This is Contact Page</h1>`);
    res.end();
  }
});

// port
server.listen(5050, () => {
  console.log('Server Running');
});
