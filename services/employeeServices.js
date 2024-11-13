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
        error: error.message,
      };
    }
  },

  getEmployeesDetail: async (req) => {
    const { nik } = req.body;

    if (nik == undefined || nik == "") {
      return {
        statusCode: 404,
        status: false,
        message: "Pastikan Parameter Yang Digunakan",
      };
    }

    try {
      const employees = await postgres.employee.findAll({
        include: [
          { model: postgres.team, attributes: ["team_desc"] },
          {
            model: postgres.position,
            attributes: ["position_desc"],
          },
        ],
        where: { nik: nik },
      });

      const map = employees.map((data) => ({
        nik: data.nik,
        nama_karyawan: data.nama_karyawan,
        insert_date: data.insert_date,
        update_date: data.update_date,
        position_code: data.position_code,
        position_desc: data.p?.position_desc || null,
        team_code: data.team_code,
        team_desc: data.t?.team_desc || null,
        isactive: data.isactive,
      }));

      if (!employees.length) {
        return {
          statusCode: 200,
          status: false,
          message: "Data Karyawan Tidak Ditemukan",
        };
      }

      return {
        statusCode: 200,
        status: true,
        employees: map,
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
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
        error: error.message,
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
        error: error.message,
      };
    }
  },
};
