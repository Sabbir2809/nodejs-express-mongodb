// Dependencies
const express = require('express');
const server = express();

//Middleware
server.use(express.json());
server.use(express.static('public'));

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./public/data.json', 'utf-8'));
const products = data.products;

// API ROOT , base URL, example - google.com/api/v2/
// API - Endpoint - Route
// C R U D

//Create POST /products
server.post('/products', (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// Read GET /products
server.get('/products', (req, res) => {
  res.json(products);
});

// Read GET /products/:id
server.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Update PUT /products/:id
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});

// Update PATCH /products/:id
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

// Delete DELETE /products/:id
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

server.listen(8080, () => {
  console.log('server started');
});
