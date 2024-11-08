const homeControllers = require("../controllers/homeControllers");
const router = require("express").Router();

router.get("/", homeControllers.homePage);

module.exports = router;
