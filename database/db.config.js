const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/testDB.sqlite",
});

module.exports = sequelize;
