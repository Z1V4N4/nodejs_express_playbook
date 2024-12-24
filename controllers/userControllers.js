const userServices = require("../services/userServices");
module.exports = {
  insertUser: async (req, res) => {
    const { statusCode, status, message, error } =
      await userServices.insertUser(req);
    return res.status(statusCode).json({ status, message, error });
  },

  getAllUsers: async (req, res) => {
    const { statusCode, status, users, message, error } =
      await userServices.getAllUsers(req);
    if (status) {
      return res.status(statusCode).json({ status, users });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  updateUser: async (req, res) => {
    const { statusCode, status, message, error } =
      await userServices.updateUser(req);
    return res.status(statusCode).json({ status, message, error });
  },

  deleteUser: async (req, res) => {
    const { statusCode, status, message, error } =
      await userServices.deleteUser(req);
    return res.status(statusCode).json({ status, message, error });
  },
};
