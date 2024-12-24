require("dotenv").config();
module.exports = {
  uri: process.env.URI_MG,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // user: process.env.USER_MG,
    // pass: process.env.PASSWORD_MG,
    // authSource: process.env.AUTH_MG || "admin", // Optional: if your DB has a different auth source
    // poolSize: 20, // Default pool size for connections
    // socketTimeoutMS: 30000, // Optional: connection timeout
    // connectTimeoutMS: 30000, // Optional: connection timeout
    // serverSelectionTimeoutMS: 5000, // Optional: server selection timeout
    // replicaSet: process.env.REPLICA_MG, // Optional: if using replica set
    // tls: process.env.TLS_MG === "true", // Optional: enable TLS/SSL if set to 'true' in env
    // tlsCAFile: process.env.CA_MG, // Optional: specify CA file for TLS/SSL
  },
};
