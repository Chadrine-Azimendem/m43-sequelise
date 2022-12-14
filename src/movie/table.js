const { DataTypes, INTEGER } = require("sequelize");
const { openSequelizeConnection } = require("../db/connection");

// sequelise class Movie.
const Movie = openSequelizeConnection.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
  director: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
  rating: {
    type: INTEGER,
  },
});

module.exports = Movie;
