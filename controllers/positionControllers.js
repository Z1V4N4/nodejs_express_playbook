const positionService = require("../services/positionServices");
module.exports = {
  getPositions: async (req, res) => {
    const { statusCode, status, positions, message } =
      await positionService.getPositions(req);
    if (status) {
      return res.status(statusCode).json({ status, positions });
    } else {
      return res.status(statusCode).json({ status, message });
    }
  },

  insertPositions: async (req, res) => {
    const { statusCode, status, message } =
      await positionService.insertPositions(req);
    return res.status(statusCode).json({ status: status, message: message });
  },

  updatePositions: async (req, res) => {
    const { statusCode, status, message } =
      await positionService.updatePositions(req);
    return res.status(statusCode).json({ status: status, message: message });
  },
};
