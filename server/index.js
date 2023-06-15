// Dependencies
const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const { connectionDB } = require('./config/db');

// Middleware
server.use(express.json());
server.use(express.static('dist'));
server.use(cors());

// routes
server.use('/api/v1', productRouter.router);
server.use('/api/v1', userRouter.router);

server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// PORT
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
  connectionDB();
});
