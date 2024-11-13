const teamServices = require("../services/teamServices");
module.exports = {
  getTeams: async (req, res) => {
    const { statusCode, status, teams, message, error } =
      await teamServices.getTeams(req);
    if (status) {
      return res.status(statusCode).json({ status, teams });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  insertTeams: async (req, res) => {
    const { statusCode, status, message, error } =
      await teamServices.insertTeams(req);
    return res.status(statusCode).json({ status, message, error });
  },

  updateTeams: async (req, res) => {
    const { statusCode, status, message, error } =
      await teamServices.updateTeams(req);
    return res.status(statusCode).json({ status, message, error });
  },
};
