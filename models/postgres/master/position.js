require("dotenv").config();
module.exports = (sequelize, Sequelize) => {
  const position = sequelize.define(
    "p",
    {
      position_code: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      position_desc: Sequelize.STRING(100),
      insert_date: Sequelize.DATE,
      update_date: Sequelize.DATE,
    },
    {
      schema: process.env.SCHEMA,
      tableName: "position",
      timestamps: false,
    }
  );

  return position;
};
