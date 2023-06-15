const { Product } = require('../models/product');

//@description: Create Product
//@route: POST - /api/v1/products
exports.createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await Product.create(reqBody);

    res.status(201).json({
      message: 'Success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: 'Fail', Error: error.message });
  }
};

//@description: Get All Products
//@route: GET - /api/v1/products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(201).json({
      message: 'Success',
      data: products,
    });
  } catch (error) {
    res.status(400).json({ message: 'Fail', Error: error.message });
  }
};

//@description: Get Single Product
//@route: GET - /api/v1/products/:id
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });

    res.status(201).json({
      message: 'Success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: 'Fail', Error: error.message });
  }
};

//@description: Get Update Product
//@route: PUT - /api/v1/products/:Id
exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const product = await Product.findOneAndReplace({ _id: id }, update, { new: true });

    res.status(201).json({
      message: 'Success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: 'Fail', Error: error.message });
  }
};

//@description: Get Update Product
//@route: PATCH - /api/v1/products/:Id
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const product = await Product.findOneAndUpdate({ _id: id }, update, { new: true });

    res.status(201).json({
      message: 'Success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: 'Fail', Error: error.message });
  }
};

//@description: Get Delete Product
//@route: DELETE - /api/v1/products/:Id
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    await Product.findByIdAndDelete({ _id: id });

    res.status(201).json({
      message: 'Success',
      data: 'Deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({ message: 'Fail', Error: error.message });
  }
};
