const express = require('express');
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//bodyParser
server.use(express.json());
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(8080, () => {
  console.log('server started');
});
