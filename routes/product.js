// Dependencies
const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router
  .post('/products', productController.createProduct)
  .get('/products', productController.getAllProducts)
  .get('/products/:id', productController.getProduct)
  .put('/products/:id', productController.replaceProduct)
  .patch('/products/:id', productController.updateProduct)
  .delete('/products/:id', productController.deleteProduct);

// export
exports.router = router;
