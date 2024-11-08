const postgres = require("../models/postgres");
module.exports = {
  getTeams: async () => {
    try {
      const teams = await postgres.team.findAll();
      return {
        statusCode: 200,
        status: true,
        teams,
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

  insertTeams: async (req) => {
    const { team_code, team_desc } = req.body;
    try {
      const cek = await postgres.team.findAll({
        where: { team_code },
      });

      if (cek.length > 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Kode Team Telah Terdaftar",
        };
      }

      await postgres.team.create({
        team_code,
        team_desc,
      });

      return {
        statusCode: 200,
        status: true,
        message: "Team Berhasil Ditambahkan",
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

  updateTeams: async (req) => {
    const { team_code, team_desc } = req.body;
    try {
      const teams = postgres.team.update(
        {
          team_desc,
          update_date: new Date(),
        },
        { where: { team_code } }
      );

      if (teams === 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Team Gagal Terupdate",
        };
      }
      return {
        statusCode: 200,
        status: true,
        message: "Team Berhasil Diupdate",
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
