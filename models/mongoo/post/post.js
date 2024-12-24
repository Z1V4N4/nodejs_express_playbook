const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, ref: "User" }, // Reference to User model
  created_at: { type: Date, default: Date.now },
  update_at: Date,
});

const Post = mongoose.model("Post", postSchema, "Posts");

module.exports = Post;
