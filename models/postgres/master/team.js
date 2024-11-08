require("dotenv").config();
module.exports = (sequelize, Sequelize) => {
  const team = sequelize.define(
    "t",
    {
      team_code: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      team_desc: Sequelize.STRING(100),
      insert_date: Sequelize.DATE,
      update_date: Sequelize.DATE,
    },
    {
      schema: process.env.SCHEMA,
      tableName: "team",
      timestamps: false,
    }
  );

  return team;
};
