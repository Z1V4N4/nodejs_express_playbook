const employeeServices = require("../services/employeeServices");
module.exports = {
  getEmployees: async (req, res) => {
    const { statusCode, status, employees, message, error } =
      await employeeServices.getEmployees(req);
    if (status) {
      return res.status(statusCode).json({ status, employees });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  getEmployeesDetail: async (req, res) => {
    const { statusCode, status, employees, message, error } =
      await employeeServices.getEmployeesDetail(req);
    if (status) {
      return res.status(statusCode).json({ status, employees });
    } else {
      return res.status(statusCode).json({ status, message, error });
    }
  },

  insertEmployees: async (req, res) => {
    const { statusCode, status, message, error } =
      await employeeServices.insertEmployees(req);
    return res.status(statusCode).json({ status, message, error });
  },

  updateEmployees: async (req, res) => {
    const { statusCode, status, message, error } =
      await employeeServices.updateEmployees(req);
    return res.status(statusCode).json({ status, message, error });
  },
};
