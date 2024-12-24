const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const postgres = require("./models/postgres");
const mongoo = require("./models/mongoo");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use(routes);

//get connection
postgres.connectPostgres();
mongoo.connectMongoo();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
