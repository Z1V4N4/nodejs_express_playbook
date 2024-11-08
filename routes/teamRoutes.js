const teamControllers = require("../controllers/teamControllers");
const router = require("express").Router();

router
  .get("/getTeams", teamControllers.getTeams)
  .post("/insertTeams", teamControllers.insertTeams)
  .post("/updateTeams", teamControllers.updateTeams);

module.exports = router;
