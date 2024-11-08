const teamServices = require("../services/teamServices");
module.exports = {
  getTeams: async (req, res) => {
    const { statusCode, status, teams, message } = await teamServices.getTeams(
      req
    );
    if (status) {
      return res.status(statusCode).json({ status, teams });
    } else {
      return res.status(statusCode).json({ status, message });
    }
  },

  insertTeams: async (req, res) => {
    const { statusCode, status, message } = await teamServices.insertTeams(req);
    return res.status(statusCode).json({ status: status, message: message });
  },

  updateTeams: async (req, res) => {
    const { statusCode, status, message } = await teamServices.updateTeams(req);
    return res.status(statusCode).json({ status: status, message: message });
  },
};
