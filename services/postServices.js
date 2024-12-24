const Post = require("../models/mongoo/post/post");
const User = require("../models/mongoo/user/user");

module.exports = {
  // Create a new post
  insertPost: async (req) => {
    try {
      const post = new Post(req.body);
      await post.save();
      return {
        statusCode: 200,
        status: true,
        message: "Post Berhasil Ditambahkan",
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  },

  // Read all posts
  getAllPost: async () => {
    try {
      const posts = await Post.find();

      if (posts.length <= 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Belum Ada Post Yang Dibuat",
        };
      }

      return {
        statusCode: 200,
        status: true,
        posts,
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  },

  getAllUserPost: async (req) => {
    const { email } = req.body;
    try {
      const posts = await Post.find({ author: email });

      if (posts.length <= 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Belum Ada Post Yang Dibuat",
        };
      }

      const user = await User.findOne({ email });

      if (!user) {
        return {
          statusCode: 200,
          status: false,
          message: "User Tidak Ditemukan",
        };
      }

      const populatedPosts = posts.map((post) => ({
        ...post.toObject(), // Convert to plain object
        authorName: user.name, // Add the author's name to each post
      }));

      return {
        statusCode: 200,
        status: true,
        posts: populatedPosts,
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  },

  // Update a post
  updatePost: async (req) => {
    const { _id } = req.body;
    try {
      const post = await Post.findByIdAndUpdate({ _id }, req.body);
      if (!post) {
        return {
          statusCode: 200,
          status: false,
          message: "Gagal Update Post",
        };
      }
      return {
        statusCode: 200,
        status: true,
        message: "Update Post Berhasil",
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  },

  // Delete a post
  deletePost: async (req) => {
    const { email } = req.body;
    try {
      const post = await Post.findByIdAndDelete({ email: email });
      if (post.length <= 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Gagal Delete Post",
        };
      }
      return {
        statusCode: 200,
        status: true,
        message: "Berhasil Delete Post",
      };
    } catch (error) {
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  },
};
