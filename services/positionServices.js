const postgres = require("../models/postgres");
module.exports = {
  getPositions: async () => {
    try {
      const positions = await postgres.position.findAll();
      return {
        statusCode: 200,
        status: true,
        positions,
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

  insertPositions: async (req) => {
    const { position_code, position_desc } = req.body;
    try {
      const cek = await postgres.position.findAll({
        where: { position_code },
      });

      if (cek.length > 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Kode Posisi Telah Terdaftar",
        };
      }

      await postgres.position.create({
        position_code,
        position_desc,
      });

      return {
        statusCode: 200,
        status: true,
        message: "Posisi Berhasil Ditambahkan",
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

  updatePositions: async (req) => {
    const { position_code, position_desc } = req.body;
    try {
      const positions = postgres.position.update(
        {
          position_desc,
          update_date: new Date(),
        },
        { where: { position_code } }
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
