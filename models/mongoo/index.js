const dbConf = require("../../configs/mongoo");
const mongoose = require("mongoose");

//get connection
const connectMongoo = async () => {
  await mongoose
    .connect(dbConf.uri, dbConf.options)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = { connectMongoo };
