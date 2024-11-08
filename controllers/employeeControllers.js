const employeeServices = require("../services/employeeServices");
module.exports = {
  getEmployees: async (req, res) => {
    const { statusCode, status, employees, message } =
      await employeeServices.getEmployees(req);
    if (status) {
      return res.status(statusCode).json({ status, employees });
    } else {
      return res.status(statusCode).json({ status, message });
    }
  },

  insertEmployees: async (req, res) => {
    const { statusCode, status, message } =
      await employeeServices.insertEmployees(req);
    return res.status(statusCode).json({ status: status, message: message });
  },

  updateEmployees: async (req, res) => {
    const { statusCode, status, message } =
      await employeeServices.updateEmployees(req);
    return res.status(statusCode).json({ status: status, message: message });
  },
};
