const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'));
const products = data.products;

//@description: Create Product
//@route: POST - /api/v1/products
exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};

//@description: Get All Products
//@route: GET - /api/v1/products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

//@description: Get Single Product
//@route: GET - /api/v1/products/:id
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

//@description: Get Update Product
//@route: PUT - /api/v1/products/:Id
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

//@description: Get Update Product
//@route: PATCH - /api/v1/products/:Id
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

//@description: Get Delete Product
//@route: DELETE - /api/v1/products/:Id
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
