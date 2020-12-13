const { DataTypes, Sequelize } = require("sequelize");
// const { Sequelize } = require('.');
// import Sequelize from "sequelize";
('use strict');

module.exports = function (sequelize, Datatypes) {
  const Item = sequelize.define("Item", {
    // ID will be automatically created when a new model is made.
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    itemDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      notEmpty: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rentalFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxRentalDuration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    // confirm number type for phone number
    phone: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    preferredContact: {
      type: DataTypes.STRING,
    },
    availableStatus: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });
  //   makes the user (owner) ID a foreign key
  //   Item.associate = function (models) {
  //     Item.belongsTo(models.User);
  //   };
  return Item;
};
