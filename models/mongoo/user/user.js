const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  created_at: { type: Date, default: Date.now },
  update_at: { type: Date },
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
