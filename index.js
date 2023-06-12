// 1. CommonJS Module (recommended)
const lib = require('./lib');
lib.sum(2, 3);

const fs = require('fs').promises;
fs.readFile('test.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

// 1. ES Module
// import { sub } from './lib.js';
// sub(5, 2);
