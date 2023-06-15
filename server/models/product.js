// Dependencies
const { Schema, model } = require('mongoose');

// Schema
const productSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
      min: [0, 'Wrong Min Discount'],
    },
    discountPercentage: {
      type: Number,
      min: [0, 'Wrong Min Discount'],
      max: [50, 'Wrong Max Discount'],
    },
    rating: {
      type: Number,
      min: [0, 'Wrong Min Rating'],
      max: [5, 'Wrong Max Rating'],
      default: 0,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: [String],
  },
  { timestamps: true, versionKey: false }
);

// model
exports.Product = model('Product', productSchema);
