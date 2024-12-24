const userControllers = require("../controllers/userControllers");
const router = require("express").Router();

router
  .post("/insertUser", userControllers.insertUser)
  .get("/getAllUsers", userControllers.getAllUsers)
  .post("/updateUser", userControllers.updateUser)
  .post("/deleteUser", userControllers.deleteUser);

module.exports = router;
