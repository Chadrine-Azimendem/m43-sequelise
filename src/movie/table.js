const { DataTypes } = require("sequelize");
const { openSequelizeConnection } = require("../db/connection");

// structure Movie table.
const Movie = openSequelizeConnection.define("Movie", {
  movieId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
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
    type: DataTypes.INTEGER,
  },
});

// const Cinema = openSequelizeConnection.define("Cinema", {
//   cinema_id: {
//     type: INTEGER,
//     autoIncrement: true,
//     unique: true,
//     primaryKey: true,
//   },
//   cinema_name: {
//     type: INTEGER,
//     unique: true,
//   },
//   cinema_address: {
//     type: INTEGER,
//     autoIncrement: true,
//     unique: true,
//   },
//   movie_id: {
//     type: INTEGER,
//     allowNull: false,
//     foreignKey: true,
//   },
//   ticket_price: {
//     type: DECIMAL(4, 2),
//   },
// });

// const User = openSequelizeConnection.define("User", {
//   userName: {
//     type: DataTypes.STRING,
//     defaultValue: "Not specified",
//   },
//   movieId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     foreignKey: true,
//   },
// });

module.exports = Movie;
