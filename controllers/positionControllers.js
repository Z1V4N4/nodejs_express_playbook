const positionService = require("../services/positionServices");
module.exports = {
  getPositions: async (req, res) => {
    const { statusCode, status, positions, message, error } =
      await positionService.getPositions(req);
    if (status) {
      return res.status(statusCode).json({ status, positions });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  insertPositions: async (req, res) => {
    const { statusCode, status, message, error } =
      await positionService.insertPositions(req);
    return res.status(statusCode).json({ status, message, error });
  },

  updatePositions: async (req, res) => {
    const { statusCode, status, message, error } =
      await positionService.updatePositions(req);
    return res.status(statusCode).json({ status, message, error });
  },
};
