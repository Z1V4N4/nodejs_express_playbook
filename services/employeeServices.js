const postgres = require("../models/postgres");
module.exports = {
  getEmployees: async () => {
    try {
      const employees = await postgres.employee.findAll();
      return {
        statusCode: 200,
        status: true,
        employees,
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
      };
    }
  },

  insertEmployees: async (req) => {
    const { nik, nama_karyawan, position_code, team_code } = req.body;
    try {
      const cek = await postgres.employee.findAll({
        where: { nik },
      });

      if (cek.length > 0) {
        return {
          statusCode: 200,
          status: false,
          message: "NIK Telah Terdaftar",
        };
      }

      await postgres.employee.create({
        nik,
        nama_karyawan,
        position_code,
        team_code,
      });

      return {
        statusCode: 200,
        status: true,
        message: "Employee Berhasil Ditambahkan",
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
      };
    }
  },

  updateEmployees: async (req) => {
    const { nik, nama_karyawan, position_code, team_code, isactive } = req.body;
    try {
      const positions = postgres.employee.update(
        {
          nama_karyawan,
          position_code,
          team_code,
          isactive,
          update_date: new Date(),
        },
        { where: { nik } }
      );

      if (positions === 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Posisi Gagal Terupdate",
        };
      }
      return {
        statusCode: 200,
        status: true,
        message: "Posisi Berhasil Diupdate",
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
      };
    }
  },
};
