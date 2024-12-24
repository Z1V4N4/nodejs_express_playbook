const postControllers = require("../controllers/postControllers");
const router = require("express").Router();

router
  .post("/insertPost", postControllers.insertPost)
  .get("/getAllPost", postControllers.getAllPost)
  .post("/getAllUserPost", postControllers.getAllUserPost)
  .post("/updatePost", postControllers.updatePost)
  .post("/deletePost", postControllers.deletePost);

module.exports = router;
