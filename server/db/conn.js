const Sequelize = require("sequelize");
const conn = new Sequelize(
  "postgres://postgres:mysecretpassword@localhost:5432/acme_db"
);

module.exports = conn;
