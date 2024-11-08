const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use(routes);

//get connection
const postgre = require("./models/postgres/index");
postgre.sequelize
  .sync({ force: false, alter: false })
  .then(() => {
    console.log("koneksi postgres ok");
  })
  .catch((err) => {
    console.log("koneksi postgres gagal: " + err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
