// back-end/config/db.js
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL); // Mongoose 7+ không cần options cũ
  console.log('MongoDB connected');
};

module.exports = connectDB;
