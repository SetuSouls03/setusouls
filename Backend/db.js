const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  };

  const connectWithRetry = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, options);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error("❌ MongoDB connection failed. Retrying in 5s...", err.message);
      setTimeout(connectWithRetry, 5000);
    }
  };

  connectWithRetry();
};

module.exports = connectDB;
