// Dependencies
const express = require('express');
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

// Middleware
server.use(express.json());
server.use(express.static('public'));

// routes
server.use('/api/v1', productRouter.router);
server.use('/api/v1', userRouter.router);

// PORT
const port = 8080;
server.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
