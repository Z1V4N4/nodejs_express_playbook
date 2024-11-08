require("dotenv").config();
module.exports = {
  host: process.env.HOST_PG,
  port: process.env.PORT_PG,
  user: process.env.USER_PG,
  password: process.env.PASSWORD_PG,
  db: process.env.DBNAME_PG,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 20,
    min: 0,
    // acquire: 30000,
    idle: 10000,
  },
  timezone: process.env.TZ_IND,
};
