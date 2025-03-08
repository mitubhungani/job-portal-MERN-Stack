const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB");
  }
};

module.exports = dbConnection;
