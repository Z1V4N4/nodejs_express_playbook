require("dotenv").config();
module.exports = (sequelize, Sequelize) => {
  const employee = sequelize.define(
    "e",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nik: Sequelize.STRING(10),
      nama_karyawan: Sequelize.STRING(255),
      insert_date: Sequelize.DATE,
      update_date: Sequelize.DATE,
      position_code: Sequelize.STRING(50),
      team_code: Sequelize.STRING(50),
      isactive: Sequelize.STRING(1),
    },
    {
      schema: process.env.SCHEMA,
      tableName: "employee",
      timestamps: false,
    }
  );

  return employee;
};
