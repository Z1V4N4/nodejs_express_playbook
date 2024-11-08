const positionControllers = require("../controllers/positionControllers");
const router = require("express").Router();

router
  .get("/getPositions", positionControllers.getPositions)
  .post("/insertPositions", positionControllers.insertPositions)
  .post("/updatePositions", positionControllers.updatePositions);

module.exports = router;
