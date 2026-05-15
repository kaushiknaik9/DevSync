const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Congrats!! \nMondoDB Connected");
  } catch (e) {
    console.log("Error Here!!", e);
    process.exit(1);
  }
};

module.exports = connectDB;
