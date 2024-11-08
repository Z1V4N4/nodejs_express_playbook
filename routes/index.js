const router = require("express").Router();
const home = require("./homeRoutes");
const position = require("./positionRoutes");
const team = require("./teamRoutes");
const employee = require("./employeeRoutes");

const routeList = [
  {
    path: "/",
    route: home,
  },
  {
    path: "/position",
    route: position,
  },
  {
    path: "/team",
    route: team,
  },
  {
    path: "/employee",
    route: employee,
  },
];

routeList.forEach((route) => {
  try {
    router.use(route.path, route.route);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
