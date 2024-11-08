const dbConf = require("../../configs/db.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConf.db, dbConf.user, dbConf.password, {
  host: dbConf.host,
  dialect: dbConf.dialect,
  pool: {
    max: dbConf.pool.max,
    min: dbConf.pool.min,
    acquire: dbConf.pool.acquire,
    idle: dbConf.pool.idle,
  },
  dialectOptions: {},
  timezone: dbConf.timezone,
});

const db = {};

db.Sequelize = DataTypes;
db.sequelize = sequelize;

//master
db.position = require("./master/position.js")(sequelize, DataTypes);
db.team = require("./master/team.js")(sequelize, DataTypes);

//employee
db.employee = require("./employee/employee.js")(sequelize, DataTypes);

//relation
db.employee.belongsTo(db.position, {
  foreignKey: "position_code",
  targetKey: "position_code",
});
db.position.hasMany(db.employee, {
  foreignKey: "position_code",
  sourceKey: "position_code",
});
db.employee.belongsTo(db.team, {
  foreignKey: "team_code",
  targetKey: "team_code",
});
db.team.hasMany(db.employee, {
  foreignKey: "team_code",
  sourceKey: "team_code",
});

module.exports = db;
