const postServices = require("../services/postServices");
module.exports = {
  insertPost: async (req, res) => {
    const { statusCode, status, message, error } =
      await postServices.insertPost(req);
    return res.status(statusCode).json({ status, message, error });
  },

  getAllPost: async (req, res) => {
    const { statusCode, status, posts, message, error } =
      await postServices.getAllPost(req);
    if (status) {
      return res.status(statusCode).json({ status, posts });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  getAllUserPost: async (req, res) => {
    const { statusCode, status, posts, message, error } =
      await postServices.getAllUserPost(req);
    if (status) {
      return res.status(statusCode).json({ status, posts });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  updatePost: async (req, res) => {
    const { statusCode, status, message, error } =
      await postServices.updatePost(req);
    return res.status(statusCode).json({ status, message, error });
  },

  deletePost: async (req, res) => {
    const { statusCode, status, message, error } =
      await postServices.deletePost(req);
    return res.status(statusCode).json({ status, message, error });
  },
};
