const User = require("../models/mongoo/user/user");

module.exports = {
  // Create a new user
  insertUser: async (req) => {
    const { email } = req.body;
    try {
      const users = await User.find({ email: email });

      if (users.length != 0) {
        return {
          statusCode: 200,
          status: false,
          message: "User Telah Terdaftar",
        };
      }

      const user = new User(req.body);
      await user.save();
      return {
        statusCode: 200,
        status: true,
        message: "User Berhasil Ditambahkan",
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

  // Read all users
  getAllUsers: async () => {
    try {
      const users = await User.find();

      if (users.length <= 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Belum Ada User Terdaftar",
        };
      }

      return {
        statusCode: 200,
        status: true,
        users,
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

  // Update a user
  updateUser: async (req) => {
    const { name, email } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { email: email }, //search by
        { name: name, update_at: Date.now } // update object
      );

      if (user.length <= 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Gagal  Update User",
        };
      }
      return {
        statusCode: 200,
        status: true,
        message: "Update User Berhasil",
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

  // Delete a user
  deleteUser: async (req) => {
    const { email } = req.body;
    try {
      const user = await User.findOneAndDelete({ email: email });
      if (user.length <= 0) {
        return {
          statusCode: 200,
          status: false,
          message: "Gagal Delete User",
        };
      }
      return {
        statusCode: 200,
        status: true,
        message: "Berhasil Delete User",
      };
    } catch (error) {
      return {
        statusCode: 500,
        status: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  },
};
