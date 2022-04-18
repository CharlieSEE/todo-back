const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.config");

const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Contents: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todo;
