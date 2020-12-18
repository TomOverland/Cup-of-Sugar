const { DataTypes, Sequelize } = require("sequelize");
("use strict");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The id obtained from auth0 cannot be null, and must be a unique id to the db
    auth0_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // The user's name cannot be null. This contains both first and last name.
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // the user's email cannot be null
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });
  // for when we want to connect users to their listings
  User.associate = function (models) {
    User.hasMany(models.Item);
  };

  return User;
};
