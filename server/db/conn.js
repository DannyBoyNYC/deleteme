const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:mysecretpassword@localhost:5432/acme_db"
);

module.exports = conn;
