const employeeControllers = require("../controllers/employeeControllers");
const router = require("express").Router();

router
  .get("/getEmployees", employeeControllers.getEmployees)
  .post("/getEmployeesDetail", employeeControllers.getEmployeesDetail)
  .post("/insertEmployees", employeeControllers.insertEmployees)
  .post("/updateEmployees", employeeControllers.updateEmployees);

module.exports = router;
