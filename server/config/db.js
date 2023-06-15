// Dependencies
const mongoose = require('mongoose');

// MongoDB Connection
exports.connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database Connected');
  } catch (error) {
    console.error(error.message);
  }
};
